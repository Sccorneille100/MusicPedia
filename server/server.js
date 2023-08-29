const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./config/config'); // Import your Last.fm API key
const bcrypt = require('bcrypt');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const jwt = require('jsonwebtoken')
const secretKey = (process.env.JWT_SECRET);
const routes = require('./routes');


// Import Route Handlers
const { artistRoutes } = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', require('./routes/api/userRoutes.js'))

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // You can send a response here, such as rendering an HTML page.
    res.send('<h1>Welcome to the Artist Search App</h1>');
});


// Last.fm API key
const lastFMAPIKey = config.lastFMAPIKey;


app.use(routes);

// Search route
app.get('/search', async (req, res) => {
  const searchTerm = req.query.q;

  try {
    // Search Last.fm for artist information
    const lastfmResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'artist.search',
        artist: searchTerm,
        api_key: lastFMAPIKey,
        format: 'json',
      },
    });

    // Check if the Last.fm API response contains 'artistmatches'
    if (!lastfmResponse.data.results || !lastfmResponse.data.results.artistmatches) {
      return res.status(404).json({ message: 'No results found.' });
    }

    // Extract relevant data from the Last.fm response
    const searchResults = lastfmResponse.data.results.artistmatches.artist;

    if (searchResults.length === 0) {
      return res.status(404).json({ message: 'No results found.' });
    }

    // Extract artist names
    const artistNames = searchResults.map((result) => result.name);

    // Respond with artist names
    res.json({ artistNames });
  } catch (error) {
    console.error('Last.fm API Error:', error);
    return res.status(500).json({ message: 'Error fetching Last.fm data.' });
  }
});

// app.use('/album', albumRoutes);
app.use('/artists', artistRoutes);
// app.use('/songs', songRoutes);


app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src/pages', 'Register.jsx'));
});


app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});


// Put this into a database
const users = [];

 app.get('/users', (req, res) => {
     res.json(users);
 });

 app.post('/users', async (req, res) => {
     try {
         const hashedPassword = await bcrypt.hash(req.body.password, 10);
         const user = { name: req.body.name, password: hashedPassword };
         users.push(user);
         res.status(201).send();
     } catch {
         res.status(500).send()
     }
 });

 app.post('/users/login', async (req, res) => {
     const user = users.find(user => user.name === req.body.name)
     if (user == null) {
         return res.status(400).send('Cannot find user')
     }
     try {
        if (await bcrypt.compare(req.body.password, user.password)) {
         res.send('Success')
        } else {
         res.send('Not Allowed')
        }
     } catch {
         res.status(500).send()
     }
 })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./config/config'); // Import your Last.fm API key
const bcrypt = require('bcrypt');

// Import Route Handlers
const { artistRoutes, searchRoutes } = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // You can send a response here, such as rendering an HTML page.
    res.send('<h1>Welcome to the Artist Search App</h1>');
});

// app.use('/album', albumRoutes);
app.use('/artists', artistRoutes);
app.use('/search-results', searchRoutes);
// app.use('/songs', songRoutes);

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
        res.status(500).send();
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

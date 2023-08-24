const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./config/config'); // Import your Last.fm API key

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // You can send a response here, such as rendering an HTML page.
    res.send('<h1>Welcome to the Artist Search App</h1>');
  });
  

// Last.fm API key
const lastFMAPIKey = config.lastFMAPIKey;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

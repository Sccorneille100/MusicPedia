const express = require('express');
const axios = require('axios');
const router = express.Router();

//Import the last.fm API key
const config = require('../config/config');

// Last.fm API key
const lastFMAPIKey = config.lastFMAPIKey;

// Search route for song tracks
router.get('/search-song', async (req, res) => {
  const searchTerm = req.query.q;

  try {
    // Search Last.fm for artist information
    const lastfmResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'track.search',
        artist: searchTerm,
        api_key: lastFMAPIKey,
        format: 'json',
      },
    });

    // Check if the Last.fm API response contains 'trackmatches'
    if (!lastfmResponse.data.results || !lastfmResponse.data.results.trackmatches) {
      return res.status(404).json({ message: 'No results found.' });
    }

    // Extract relevant data from the Last.fm response
    const searchResults = lastfmResponse.data.results.trackmatches.artist

    if (searchResults.length === 0) {
      return res.status(404).json({ message: 'No results found.' });
    }

    // Extract Song names
    const artistNames = searchResults.map((result) => result.name);

    // Respond with song names
    res.json({ artistNames });
  } catch (error) {
    console.error('Last.fm API Error:', error);
    return res.status(500).json({ message: 'Error fetching Last.fm data.' });
  }
});

module.exports = router;
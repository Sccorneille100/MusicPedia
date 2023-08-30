const express = require('express');
const axios = require('axios');
const router = express.Router();

// Import Last.fm API key
const config = require('../config/config');

// Define route handler for artist search
router.get('/search', async (req, res) => {
    const searchTerm = req.query.q;
  
    try {
      // Search Last.fm for artist information
      const lastfmResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
        params: {
          method: 'artist.search',
          artist: searchTerm,
          api_key: config.lastFMAPIKey, 
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
  
      // Create an array of search results with type information
      const artistNames = searchResults.map((result) => ({
        name: result.name,
        type: 'artist', 
        //Parameter information based on Last.fm API documentation
        mbid: result.mbid,
        url: result.url,    
        image_small: result.image_small,
        image: result.image,
        streamable: result.streamable,
      }));
  
      // Respond with artist names
      res.json(artistNames);
    } catch (error) {
      console.error('Last.fm API Error:', error);
      return res.status(500).json({ message: 'Error fetching Last.fm data.' });
    }
  });

module.exports = router;

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Import the Artist model
const Artist = require('../models/artist');
 
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
  
      // Extract the first search result (assuming it's the most relevant)
      const firstResult = searchResults[0];

      // Create a new artist instance and save it to MongoDB
      const newArtist = new Artist({
        name: firstResult.name,
        /*
        type: 'artist', 
        mbid: firstResult.mbid,
        url: firstResult.url,    
        image_small: firstResult.image_small,
        image: firstResult.image,
        streamable: firstResult.streamable,*/
      });

      await newArtist.save();

      // Respond with the saved artist
      res.json(newArtist);
    } catch (error) {
      console.error('Last.fm API Error:', error);
      return res.status(500).json({ message: 'Error fetching Last.fm data.' });
    }
  });

module.exports = router;

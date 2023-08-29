const express = require('express');
const axios = require('axios');
const router = express.Router();

// Import your Last.fm API key
const config = require('../config/config'); 

// Define route handler for album search
router.get('/search', async (req, res) => {
    const searchTerm = req.query.q;

    try {
        // Search Last.fm for album information
        const lastfmResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
            params: {
                method: 'album.search',
                album: searchTerm, // Use 'album' instead of 'artist'
                api_key: config.lastFMAPIKey,
                format: 'json',
            },
        });

        // Check if the Last.fm API response contains 'albummatches'
        if (!lastfmResponse.data.results || !lastfmResponse.data.results.albummatches) {
            return res.status(404).json({ message: 'No results found.' });
        }

        // Extract relevant data from the Last.fm response
        const searchResults = lastfmResponse.data.results.albummatches.album;

        if (searchResults.length === 0) {
            return res.status(404).json({ message: 'No results found.' });
        }

        // Extract album names
        const albumNames = searchResults.map((result) => result.name);

        // Respond with album names
        res.json({ albumNames });
    } catch (error) {
        console.error('Last.fm API Error:', error);
        return res.status(500).json({ message: 'Error fetching Last.fm album data.' });
    }
});

module.exports = router;

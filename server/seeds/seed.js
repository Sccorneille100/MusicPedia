const db = require('../config/connection');
const { Artist } = require('../models/artist');

db.once('open', async () => {
    await Artist.deleteMany({});

    try {
      // Replace artistData with your desired artist data
      const artistData = {
        name: 'Artist Name',
        type: 'artist',
        mbid: '123456789',
        url: 'https://www.last.fm/music/Artist+Name',
        image_small: 'https://example.com/small-image.jpg',
        image: 'https://example.com/large-image.jpg',
        streamable: '1',
      };
      
      const newArtist = new Artist(artistData);
      const savedArtist = await newArtist.save();

      console.log('Artist Added:', savedArtist);
    } catch (error) {
      console.error('Error adding artist:', error);
    }

    process.exit(0);
});

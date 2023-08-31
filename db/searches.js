const { Singer, Album, Song  } = require('../models');

const Searches = {
  Query: {
    singers: async () => {
      return await Singer.find({}).populate('albums').populate({
        path: 'albums',
        populate: 'songs'
      });
    },
    albums: async () => {
      return await Album.find({}).populate('Songs');
    },
    songs: async () => {
      return await Song.find({});
    }
  }
};

module.exports = Searches;
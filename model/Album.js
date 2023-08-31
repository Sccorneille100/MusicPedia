const { Schema, model } = require('mongoose');

const albumSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    numberOfSong: {
      type: String,
      required: true
    },
    totalLength: {
      type: Number,
    },
    song: {
      type: Schema.Types.ObjectId,
      ref: 'Song'
    }
  }
);

const Album = model('Album', albumSchema);

module.exports = Album;

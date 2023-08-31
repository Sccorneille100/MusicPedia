const { Schema, model } = require('mongoose');

const singerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    TypeOfMusic: {
      type: String,
      required: true
    },
    releasedSong: {
      type: Number,
      required: true
    },
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Album'
      }
    ]
  }
);

const Singer = model('Singer', singerSchema);

module.exports = Singer;

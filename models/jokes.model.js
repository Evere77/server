// import mongoose to build the model (schema)
const mongoose = require('mongoose');

// the model - the rules the entries need to follow
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String
  },
  punchline: {
    type: String
  }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
      required: [true, 'A movie must have a name'],
    unique: false 
  },
  rating: {
    nviews: {
      type: Number,
      default: 1
    },
    avgrating: Number,

  },
  img: [String],
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  language: String,
  director: String,
  releasedOn: Date,  
  plot: String,
  genre:{
    Action:{
      type: Boolean,
      default: false
    },
    Adventure:{
      type: Boolean,
      default: false
    },
    Comedy:{
      type: Boolean,
      default: false
    },
    Crime:{
      type: Boolean,
      default: false
    },
    Drama:{
      type: Boolean,
      default: false
    },
    Fantasy:{
      type: Boolean,
      default: false
    },
    Horror:{
      type: Boolean,
      default: false
    },
    Mystery:{
      type: Boolean,
      default: false
    },
    Romance:{
      type: Boolean,
      default: false
    },
    SciFi:{
      type: Boolean,
      default: false
    },
    Thriller:{
      type: Boolean,
      default: false
    },
    History:{
      type: Boolean,
      default: false
    }
    
  },
  comments: [{
      author: String,
      reviews: String,
      date: Date,
      rating: {
        type: Number,
        min: 1,
        max: 10
      }
  }]
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

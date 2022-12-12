'use strict'

const mongoose = require('mongoose');

// mongoose requires us to define a "schema"
const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('books', booksSchema);
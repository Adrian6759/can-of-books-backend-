'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./models/books.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

async function seedDataBase() {
  await Books.create({
    title: 'Harry potter and the sorcerers stone',
    description: 'This is a story about a wizard',
    status: 'read',
  })

  await Books.create({
    title: 'Curious George',
    description: 'A story about a monkey',
    status: 'read',
  })

  await Books.create({
    title: 'The Hobbit',
    description: 'A story about a hobbit',
    status: 'not read',
  })
  console.log('books added');

  mongoose.disconnect();
}

seedDataBase();




















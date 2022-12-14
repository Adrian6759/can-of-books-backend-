'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
const Books = require('./models/books.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

async function seedDataBase() {
await Books.create({
  title: '',
  description: '',
  status: "Childhood Favorite"
})
.then(result => {
  console.log('Heres our book!', result);
})
.catch(err => {
  console.log('Ugh oh, ', err);
});
mongoose.disconnect();
}

seedDataBase();
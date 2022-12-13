'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const books = require('./model/books');
const { default: mongoose } = require('mongoose');
const app = express();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {

let title = request.query.title;
console.log(title);
  let result = [];
  if (title){
    result = await books.find({
      title: title
    })
  }else {

    result = await books.find();
  }

  response.send(result);

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

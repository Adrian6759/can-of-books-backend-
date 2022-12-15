'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const books = require('./models/books');
const { default: mongoose } = require('mongoose');
const { response } = require('express');
const app = express();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {
    try {
      let title = request.query.title
  
    let result = []
    if (title) {
      result = await books.find({
        title: title
      })
    } else {
      result = await books.find()
    }
  
    response.send(result).status(200)
    } catch (error) {
      response.send(error).status(500)
    }
    
  })
app.post('/books', async(request, response)=>{
  let newBook = await books.create(request.body);
  response.send(newBook);
})

app.delete('/books/:id', async(request, response)=>{

  let id = request.params.id;

  let deletedBook = await books.findByIdAndDelete(id);

  response.send(deletedBook);
})

app.put('/books/:id', async(request, response) => {
  console.log('I am here');
  let id = request.params.id;
  const updatedBook = await books.findByIdAndUpdate(id, request.body, { new: true });
  console.log(updatedBook);
  response.status(200).send('it worked');
})

app.use
app.use('*', (request, response) => {
  response.status(500).send('Invalid Request, page not found.')
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

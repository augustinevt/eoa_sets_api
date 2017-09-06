'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mockData = require('./data');

// Require Routes
const books = require('./routes/books')

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-JWT, jwt");
  next();
});

// Apply Routes
app.use('/books', books);


app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/data', (req, res) => {
  res.json(mockData.data);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

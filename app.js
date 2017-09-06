'use strict';

const express = require('express');
const mockData = require('./data');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-JWT, jwt");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/data', (req, res) => {
  res.json(mockData.data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

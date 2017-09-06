const express = require('express')
const router = express.Router()
const db = require('../mongo/mongo');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('All books home page')
})

app.get('/:id', async function (req, res) {
  const id = req.params.book;
  const db = mongo.getDB();
  try {
    const data = await db.collection('books').find({ _id: id }).toArray();
    const newData = makeManifest(data);
    res.json(newData);
  } catch (e) {
    console.log('Could not find book with that ID', e);
  }
});

module.exports = router

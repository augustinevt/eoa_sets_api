const express = require('express')
const router = express.Router()
const mongo = require('../mongo/mongo');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', async (req, res) => {
  const db = mongo.getDB(console.log);
  let data = [];
  try {
    data = await db.collection('sets').find({}).toArray();
  } catch (e) {
    console.log('Could not find all the sets', e)
  }
  res.json(data)
})

router.post('/', async (req, res) => {
  const db = mongo.getDB();
  const newSet = req.body;
  let responseData = null;
  try {
    let insertedDocument = await db.collection('sets').insertOne(newSet);

    console.log(insertedDocument.insertedId)
    res.json(insertedDocument.insertedId)
  } catch (e) {
console.log(e)
    res.status(503).json({message: e});
  }
});

router.delete('/:id', async (req, res) => {
  const db = mongo.getDB();
  const setId = req.params.id;
  let responseData = null;
  try {
    await db.collection('sets').remove({ _id: mongo.ObjectID(setId) });

    res.json({setId: setId})
  } catch (e) {
    console.log(e)
    res.status(503).json({message: e});
  }
});

module.exports = router

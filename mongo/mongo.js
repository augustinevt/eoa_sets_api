require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const url = 'mongodb://august:twinkies@ds129434.mlab.com:29434/eoa_sets';
var _db;

module.exports = {
  connectToServer: (cb) => {
    try {
      MongoClient.connect(url, (err, db) => {
        _db = db;
        // console.log(db)
        return cb(err);
      })
    } catch (e) {
      console.log('connecting did not work', e)
    }
  },

  getDB: () => {
    return _db;
  },

  ObjectID: (id) => ( new ObjectID(id) )
}

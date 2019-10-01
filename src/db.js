const mongoose = require('mongoose');

const dbName = process.env.DB_NAME || 'psapidev'
const uri = `mongodb://${process.env.DB_HOST}/${dbName}`
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  poolSize: 10,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  useUnifiedTopology: true,
  family: 4
}

mongoose.connect(uri, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

module.exports = db;
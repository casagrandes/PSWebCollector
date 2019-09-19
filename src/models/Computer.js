const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const computerSchema = new Schema({
  name: { type: String, index: true },
  user: String,
  os: String,
  osVersion: String,
  domain: String,
  adminPassStatus: String,
  thermalState: String,
  diskFreeSpace: Number,
});

module.exports = mongoose.model('Computer', computerSchema);
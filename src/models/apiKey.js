const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const oneYearFromNow = new Date().setFullYear(new Date().getFullYear() + 1 );

const apiKeySchema = new Schema({
  name: { type: String, index: true },
  key: String,
  active: { type: Boolean, default: true },
  createdByUserId: ObjectId,
  dateCreated: { type: Date, default: new Date() },
  expires: { type: Date, default: oneYearFromNow }
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
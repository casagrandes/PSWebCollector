const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const computerSchema = new Schema({
  name: { type: String, index: true, required: true },
  user: { type: String, required: true },
  os: { type: String, required: true },
  osVersion: { type: String, required: true },
  domain: { type: String, required: true },
  domainRole: String,
  adminPassStatus: { type: String, required: true },
  thermalState: String,
  diskFreeSpaceGB: Number,
  biosName: String,
  biosStatus: String,
  biosManufacturer: String,
  cpuName: String,
  cpuSocket: String,
  cpuMaxClock: Number,
  cpuCores: Number,
  cpuVirtCores: Number,
  gpuName: String,
  ramGB: Number,
  deviceGuid: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('Computer', computerSchema);
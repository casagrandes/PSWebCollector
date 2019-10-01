
const boom = require('@hapi/boom');
const ApiKey = require('../models/apiKey');

// API key creation 
exports.createKey = async () => {
  const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  console.log('New Key created');
  console.log(key);
  return key;
}

exports.saveKeyToDB = async (keyData) => {
  try {
    const newKey = new ApiKey(keyData);
    const keytoSave = await newKey.save();
    return keytoSave;
  } catch (err) {
    throw boom.boomify(err);
  }
}

exports.getApiKeys = async () => {
  try {
    const keyList = await ApiKey.find().select('-__v');
    return keyList;
  } catch (err) {
    throw boom.boomify(err);
  }
}

exports.searchForApiKey = async (key) => {
  try {
    const keyExist = await ApiKey.findOne({ key: key});
    if (keyExist) {
      return {error: false, exists: true};
    } else {
      return {error: 'Invalid Key' }
    }
  } catch (err) {
    throw console.error(err);
  }
}
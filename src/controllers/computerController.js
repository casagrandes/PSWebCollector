const boom = require('@hapi/boom');
// Get computer model
const Computer = require('../models/Computer');

// Get all computers 
exports.getComputers = async () => {
  try {
    const computers = await Computer.find().select('-__v');
    return computers;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer by id 
exports.getComputerById = async (id) => {
  try {
    const computer = await Computer.findById(id).select('-__v');
    return computer;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer by Name
exports.getComputerByName = async (name) => {
  try {
    const computer = await Computer.find({name: name}).select('-__v');
    return computer;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer/s by os 
exports.getComputerByOS = async (os) => {
  try {
    // Using regex to find based on data passed to it
    const computer = await Computer.find({os: { $regex: os, $options: 'i'} }).select('-__v');
    return computer;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Add a new computer
exports.addComputer = async (req) => {
  try {
    const computer = new Computer(req);
    const newComputer = await computer.save();
    return { newComputer, error: false, saved: true };
  } catch (err) {
    throw boom.boomify(err);
  }
}

// update any existing computer
exports.updateComputer = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const updateData = req.params === undefined ? req : req.params;
    const update = await Computer.findById(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// update computer from psevent
exports.updateComputerPS = async (deviceGuid, updateData) => {
  try {
    const update = await Computer.findOneAndUpdate({deviceGuid: deviceGuid}, updateData, {new: true});
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Check to see if device GUID exists
exports.checkDeviceGuid = async (deviceGuid) => {
  try {
    const guidCheck = await Computer.findOne({deviceGuid: deviceGuid});
    return guidCheck;
  } catch (err) {
    throw boom.boomify(err);
  }
}
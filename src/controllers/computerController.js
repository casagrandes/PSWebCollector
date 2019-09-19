const boom = require('@hapi/boom');
// Get computer model
const Computer = require('../models/Computer');

// Get all computers 
exports.getComputers = async () => {
  try {
    const computers = await Computer.find();
    return computers;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer by id 
exports.getComputerById = async (id) => {
  try {
    const computer = await Computer.findById(id);
    return computer;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer by Name
exports.getComputerByName = async (name) => {
  try {
    const computer = await Computer.find({name: name});
    return computer;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single computer/s by os 
exports.getComputerByOS = async (os) => {
  try {
    // Using regex to find based on data passed to it
    const computer = await Computer.find({os: { $regex: os, $options: 'i'} });
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
    return newComputer;
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
    return updater;
  } catch (err) {
    throw boom.boomify(err);
  }
}
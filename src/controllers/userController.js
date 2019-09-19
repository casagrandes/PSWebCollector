const boom = require('@hapi/boom');
// get model
const User = require('../models/User');

// Get all users
exports.getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get all users
exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// add new user
exports.addUser = async (user) => {
  try {
    const newUser = new User(user);
    const addedUser = await newUser.save();
    return addedUser;
  } catch (err) {
    throw boom.boomify(err);
  }
}
const boom = require('@hapi/boom');
// get model
const User = require('../models/User');

// Get all users
exports.getUsers = async () => {
  try {
    const users = await User.find().select('-__v -password');
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get all users
exports.getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).select('-__v -password');
    delete user.__v;
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

// remove a user
exports.removeUserById = async (userId) => {
  try {
    const deletedUser = await User.deleteOne({_id: userId});
    if (deletedUser.ok === 1) {
      console.log(`User with the ID of :${userId} has been deleted`);
      return {error: false, deletedUser};
    }
  } catch (err) {
    throw boom.boomify(err);
  }
}
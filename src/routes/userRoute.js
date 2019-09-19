const express = require('express');
const router = express.Router();

// Add controller here
const userController = require('../controllers/userController');

// Routes for users endpoint

// Get all Users
router.get('/', async (req, res, next) => {
  const users = await userController.getUsers();
  res.json(users);
});

// Get User by id
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const user = await userController.getUserById(id);
  res.json(user);
});

// Create a new user
router.post('/', async (req, res, next) => {
  const user = req.body;
  const newUser = await userController.addUser(user)
});



module.exports = router;
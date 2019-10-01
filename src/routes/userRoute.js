const express = require('express');
const router = express.Router();

// Add controller here
const userController = require('../controllers/userController');
const authMiddleware = require('../common/middlewares/auth.validation');

// Routes for users endpoint

// Get all Users
router.get('/', async (req, res, next) => {
  const users = await userController.getUsers();
  res.json(users);
});

// Get User by id
router.get('/:id', authMiddleware.validJWTNeeded, async (req, res, next) => {
  const id = req.params.id;
  const user = await userController.getUserById(id);
  res.json(user);
});

// Create a new user
router.post('/', async (req, res, next) => {
  const user = req.body;
  const newUser = await userController.addUser(user)
});

router.delete('/:id', async (req, res, next) => {
  const userId = req.params.id;
  if(userId) {
    const removeUser = await userController.removeUserById(userId);
    if (removeUser.error === false) {
      res.send('User was deleted');
    }
  } else {
    res.status(400).json({error: 'Unknown/Incorrect user id to delete'});
  }
})



module.exports = router;
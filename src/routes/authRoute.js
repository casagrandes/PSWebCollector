const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const { registerValidation, loginValidation } = require('../validation/validation');

router.post('/register', async (req, res) => {
  // Validate data before making user
  const { error } = registerValidation(req.body);
  if (error)return res.status(400).send(error.details[0].message);

  // Check if user is already in the DB
  const emailExist = await User.findOne({where: {email: req.body.email}});
  if(emailExist) return res.status(400).send('Email already exists');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log(hashedPassword);

  // Create a new user
  const { firstName, lastName, email } = req.body;
  console.log(`creating a new user: name=${firstName} ${lastName} email=${email}`);

  try {
    const savedUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).json({
      error: false,
      data: savedUser.email,
      message: 'New User has been created.'
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  // Validate data before making user
  const { error } = loginValidation(req.body);
  if (error)return res.status(400).send(error.details[0].message);

  // Check if email exists
  const user = await User.findOne({where: {email: req.body.email}});
  if(!user) return (
    console.log('user does not exist'),
    res.status(400).send('Email or password is incorrect')
    );

  // Authenticate user
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if(!validPass) {
    return (
    res.status(400).send('Email or password is incorrect')
    );
  } else {
    console.log('Successfully Authenticated');
    // Create and assign a token
    const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
    res.header('authtoken', token).status(200).json({ authtoken: token});
  };
});

module.exports = router;
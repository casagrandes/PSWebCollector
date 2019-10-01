const express = require('express');
const router = express.Router();

const computerController = require('../controllers/computerController');

// Get all computers
router.get('/', async (req, res, next) => {
  const computers = await computerController.getComputers();
  res.json(computers);
});

// Get computers by id
router.get('/:id', async (req, res, next) => {
  console.log('id: ',req.params.id);
  const id = req.params.id;
  const computer = await computerController.getComputerById(id);
  res.json(computer);
});

// Get computers by Name
router.get('/name/:name', async (req, res, next) => {
  // console.log(req.params.id);
  const name = req.params.name;
  const computer = await computerController.getComputerByName(name);
  res.json(computer);
});

// Get computers by os
router.get('/os/:os', async (req, res, next) => {
  // console.log('params.os: ', req.params.os);
  // Since using params we are sending anything that is could be used in the os field
  // to find the computer. Exmaples /os/windows, /os/10 - For windows 10, 7 for windos 7 
  // anything in the string is possible. 
  // TODO need to setup checking/validation of incoming requests and setup a standard
  const os = req.params.os;
  const computer = await computerController.getComputerByOS(os);
  res.json(computer);
});


router.post('/', async (req, res, next) => {
  console.log(req.body);
  const newComputerData = req.body;
  const newComputer = await computerController.addComputer(newComputerData);
  res.json(newComputer);
})




module.exports = router;
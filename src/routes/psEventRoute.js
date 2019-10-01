const router = require('express').Router();

const computerController = require('../controllers/computerController');
const apikeyMiddleware = require('../common/middlewares/auth.apikey');
const { psAddValidation } = require('../validation/validation');

router.post('/add', async (req, res, next) => {
  const computerData = req.body;
  computerData.createdAt = new Date();
  computerData.updatedAt = new Date();
  // console.log(computerData)
  const { api_key } = req.headers;
  const { keyAuthed, error } = await apikeyMiddleware.checkKey(api_key);
  if (keyAuthed) {
    const valiError = await psAddValidation(req.body);
    console.log(valiError);
    const computerToAdd = await computerController.addComputer(computerData);
    res.status(201).json(computerToAdd);
  } else {
    console.log(keyAuthed);
    res.status(400).json(error);
  }
})

router.put('/update', async (req, res, next) => {
  // console.log(req.body)
  const deviceGuid = req.body.deviceGuid;
  const updateData = req.body;
  const { api_key } = req.headers;
  const { keyAuthed, error } = await apikeyMiddleware.checkKey(api_key);
  if(keyAuthed) {
    const valiError = await psAddValidation(updateData);
    const guidCheck = await computerController.checkDeviceGuid(deviceGuid);
    if(guidCheck === null) {
      // If not device with that GUID exists then exit out with a error
      return res.status(400).send('No device with that GUID');
    }
    if(valiError.error) {
      console.log(valiError.error);
      res.status(400).send(valiError.error.details[0].message);
    } else {
      updateData.updatedAt = new Date();
      const newComputerData = await computerController.updateComputerPS(deviceGuid, updateData);
      if(newComputerData) {
        res.status(200).json({error: false, updateComplete: true});
      }
    }
  } else {
    console.error(error);
  }
  
})

module.exports = router;
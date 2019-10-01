const router = require('express').Router();

const apiKeyModel = require('../models/apiKey');
const apiKeyController = require('../controllers/apiKeyController');

const authValidaiton = require('../common/middlewares/auth.validation');

router.post('/create', authValidaiton.validJWTNeeded, async (req, res, next) => {
  const key = await apiKeyController.createKey();
  const keyData = {
    name: req.body.keyName,
    key: key,
    createdByUserId: req.jwt.user_id
  }
  const savedKey = await apiKeyController.saveKeyToDB(keyData);
  res.status(201).send(keyData);
})

router.get('/list', authValidaiton.validJWTNeeded, async (req, res, next) => {
  const keys = await apiKeyController.getApiKeys();
  res.json(keys);
});



module.exports = router;
const apikeyController = require('../../controllers/apiKeyController');

exports.checkKey = async (key) => {
  try {
    const { error } = await apikeyController.searchForApiKey(key);
    if (!error) {
      return { keyAuthed: true }
    } else {
      return error
    }
  } catch (err) {
    throw console.error(err);
  }
}

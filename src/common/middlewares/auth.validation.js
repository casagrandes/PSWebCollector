const jwt = require('jsonwebtoken');
const ADMIN_PERMISSION = 4096;

exports.validJWTNeeded = (req, res, next) => {
  if (req.headers['authorization']) {
    try {
      let authorization = req.headers['authorization'].split(' ');
      console.log(authorization[1]);
      if (authorization[0] !== 'Bearer') {
        res.status(401).send();
      } else {
        req.jwt = jwt.verify(authorization[1], process.env.TOKEN_SECRET, );
        return next();
      }
    } catch (err) {
      return res.status(403).send();
    }
  } else {
    return res.status(401).send();
  }
}

exports.minimumPermissionLevelRequired = (required_permission_level) => {
  return (req, res, next) => {
      let user_permission_level = parseInt(req.jwt.permission_level);
      let user_id = req.jwt.user_id;
      if (user_permission_level & required_permission_level) {
          return next();
      } else {
          return res.status(403).send();
      }
  };
};
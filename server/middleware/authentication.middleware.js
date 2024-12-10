const jwt = require('jsonwebtoken');
const key = 'my-most-secret-token';

class AuthenticationMiddleware {

  checkAuth(req, res, next) {

    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const validate = jwt.verify(req.headers.authorization, key);

    if (!validate) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  }
}

module.exports = new AuthenticationMiddleware();

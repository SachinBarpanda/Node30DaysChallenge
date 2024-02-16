const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    req.user = decoded;

    next();
  });
}

module.exports = authenticationMiddleware;
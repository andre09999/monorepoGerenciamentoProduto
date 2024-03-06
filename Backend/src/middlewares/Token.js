const tokenUtil = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error('usuario não autorizado');
    const info = tokenUtil.validateToken(authorization);
    req.info = info;
  
    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = validateToken;

const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

function validateProduct(req,res,next) {
  const validationResult = userSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({message: "dados incorretos"})
  }
  next()
}

module.exports = validateProduct;
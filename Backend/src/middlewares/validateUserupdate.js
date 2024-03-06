const Joi = require('joi');

const userSchema = Joi.object({
  newUsername: Joi.string().required(),
  newPassword: Joi.string().required(),
  oldUsername: Joi.string().required(),
  oldPassword: Joi.string().required(),
})

function validateProduct(req,res,next) {
  const validationResult = userSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({message: "dados incorretos"})
  }
  next()
}

module.exports = validateProduct;
const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  price: Joi.number().required(),
  color: Joi.string().required()
});

function validateProduct(req,res,next) {
  const validationResult = productSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({message: "dados incorretos"})
  }
  next()
}

module.exports = validateProduct;
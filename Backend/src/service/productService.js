const Product = require('../models/product');
const camelize = require('camelize');


const createProduct = async({name,brand,model,price,color}) => {
  try {
    const createdProduct = await Product.create({name, brand, model, price, color})

    return createdProduct;
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}

const readd = async () => {
  try {
    const Products = await Product.findAll()
    const productValues = Products.map(product => product.dataValues);
    return camelize(productValues);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}

const readdOne = async (id) => {
  try {
    
    const Products = await Product.findOne({ where:  id  })
    return camelize(Products.dataValues);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}
const updateProduct = async (id, { name, brand, model, price, color }) => {
  try {
    
    const updatedProduct = await Product.update(
      { name, brand, model, price, color },
      { where: { id } },
    );
    return camelize(updatedProduct);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}

const delet = async (id) => {
  try {
    
    const updatedProduct = await Product.destroy(
      { where: { id } },
    );
    return camelize(updatedProduct);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}
module.exports = { createProduct, readd, readdOne, updateProduct, delet };

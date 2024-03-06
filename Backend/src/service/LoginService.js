const Users = require('../models/user');
const camelize = require('camelize');


const createProduct = async({username, password}) => {
  try {
    const createdProduct = await Users.create({username, password})

    return createdProduct;
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}


const readdOne = async (dados) => {
  try {
    const user = await  Users.findOne({ where:  {username: dados.username, password: dados.password}  })
    return camelize(user.dataValues);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}

const updateProduct = async (dados) => {
  try {
    
    const userProduct = await  Users.update(
      { username: dados.newUsername, password: dados.newPassword },
      { where: { username: dados.oldUsername, password: dados.oldPassword } },
    );
    return camelize(userProduct);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}

const delet = async (dados) => {
  try {
    
    const deletUser = await  Users.destroy(
      { where: { username: dados.username } },
    );
    return camelize(deletUser);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
}
module.exports = { createProduct, readdOne, updateProduct, delet };

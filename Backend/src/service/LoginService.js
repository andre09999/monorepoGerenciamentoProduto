const Users = require('../models/user');
const camelize = require('camelize');


const createUser = async (data) => {
  try {
    const createdUser = await Users.create({  username: data.username, password: data.password });
    return camelize(createdUser);
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

const readdOne = async (dados) => {
  try {
    const user = await Users.findOne({ where: { username: dados.username, password: dados.password } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return camelize(user.dataValues);
  } catch (error) {
    throw new Error('Erro ao ler usuário: ' + error.message);
  }
};

const readUsername = async (dados) => {
  try {
    const user = await Users.findOne({ where: { username: dados.username } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return camelize(user.dataValues);
  } catch (error) {
    throw new Error('Erro ao ler usuário: ' + error.message);
  }
};

const updateProduct = async (dados) => {
  try {
    const [rowsUpdated] = await Users.update(
      { username: dados.newUsername, password: dados.newPassword },
      { where: { username: dados.oldUsername, password: dados.oldPassword } }
    );
    if (rowsUpdated === 0) {
      throw new Error('Usuário não encontrado');
    }
    return { username: dados.newUsername, password: dados.newPassword };
  } catch (error) {
    throw new Error('Erro ao atualizar usuário: ' + error.message);
  }
};

const deleteUser = async (dados) => {
  try {
    const rowsDeleted = await Users.destroy({ where: { username: dados.username } });
    if (rowsDeleted === 0) {
      throw new Error('Usuário não encontrado');
    }
    return { username: dados.username };
  } catch (error) {
    throw new Error('Erro ao deletar usuário: ' + error.message);
  }
};

module.exports = { createUser, readdOne, updateProduct, deleteUser,readUsername };

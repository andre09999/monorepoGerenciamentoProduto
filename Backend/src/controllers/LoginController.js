const LoginService = require('../service/LoginService.js')
const { createToken } = require('../utils/jwt.util.js')

const created = async (req, res) => {
  const response = await LoginService.createProduct(req.body)
  if (!response) {
    return res.status(400).json({mensage: "ocorreu um erro tente novamente"})
  }
  return res.status(201).json({messagem: `Usuario criado token`})
}


const ReadOne = async (req, res) => {
  const response = await LoginService.readdOne(req.body)
  if (!response) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }
  const token = createToken(req.body)

  return res.status(200).json(token)
}

const update = async (req, res) => {
  
  const response = await LoginService.updateProduct(req.body)
  if (!response) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }
  return res.status(201).json({messagem: 'Usuário atualizado com sucesso!' })
}

const Delete = async (req, res) => {

  const response = await LoginService.delet(req.body)
  if (!response) {
    return res.status(400).json({mensage: "ocorreu um erro tente novamente"})
  }
  return res.status(200).json({messagem: "Usuario deletado com sucesso"})
}

module.exports = {
  created,
  update,
  ReadOne,
  Delete
};
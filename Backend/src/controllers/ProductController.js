const productService = require('../service/productService')

const created = async (req, res) => {
  const response = await productService.createProduct(req.body)
  if (!response) {
    return res.status(400).json({mensage: "ocorreu um erro tente novamente"})
  }
  return res.status(201).json({messagem: "produtos criados"})
}

const Read = async (_req, res) => {
  const response = await productService.readd()
  if (!response) {
    return res.status(400).json({mensage: "ocorreu um erro tente novamente"})
  }
  return res.status(200).json(response)
}

const ReadOne = async (req, res) => {
  const response = await productService.readdOne(req.params)
  if (!response) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }
  return res.status(200).json(response)
}

const update = async (req, res) => {
  const { id } = req.params;
  const response = await productService.updateProduct(id ,req.body)
  if (!response) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }
  return res.status(201).json({messagem: 'Usuário atualizado com sucesso!' })
}

const Delete = async (req, res) => {
  const { id } = req.params;
  const response = await productService.delet(id)
  if (!response) {
    return res.status(400).json({mensage: "ocorreu um erro tente novamente"})
  }
  return res.status(200).json({messagem: "produtos deletado com sucesso"})
}

module.exports = {
  created,
  Read,
  update,
  ReadOne,
  Delete
};
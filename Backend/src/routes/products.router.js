const express = require('express');
const validateToken = require('../middlewares/Token');
const postController = require('../controllers/ProductController');
const validateProduct = require('../middlewares/validaçãoDeDados');

const router = express.Router();


router.post('/', validateProduct, postController.created);

router.get('/:id', postController.ReadOne);

router.get('/', postController.Read);

router.put('/:id', validateProduct, postController.update);

router.delete('/:id', postController.Delete);

module.exports = router;

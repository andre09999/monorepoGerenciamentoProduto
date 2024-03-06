const express = require('express');
const validateToken = require('../middlewares/Token');
const postlogin= require('../controllers/LoginController');
const validateProduct = require('../middlewares/validateUser');
const validateupdateProduct = require('../middlewares/validateUserupdate');

const router = express.Router();


router.post('/', validateProduct, postlogin.created);

router.get('/', validateProduct ,postlogin.ReadOne);

router.put('/',validateToken, validateupdateProduct, postlogin.update);

router.delete('/',validateToken,validateProduct, postlogin.Delete);

module.exports = router;

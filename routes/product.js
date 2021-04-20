var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/:id', productController.producto) 


module.exports = router;
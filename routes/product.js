var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/:id', productController.producto) 

router.get('/add', productController.add) 

module.exports = router;
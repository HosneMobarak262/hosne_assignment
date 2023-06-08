const express = require('express');

const router = express.Router();

const {createProduct, getAllProducts} = require('../controllers/ProductController');

router.post("./product", createProduct);
router.get("./product", getAllProducts);

module.exports = router;

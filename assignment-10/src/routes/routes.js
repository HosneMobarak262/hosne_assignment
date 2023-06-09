const express = require('express');

const router = express.Router();

const {createProduct, getAllProducts} = require('../controllers/ProductController');
const {generateToken} = require('../controllers/JwtTokenController');

router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.get("/gettoken", generateToken)

module.exports = router;

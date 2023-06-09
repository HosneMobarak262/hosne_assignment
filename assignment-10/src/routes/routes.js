const express = require('express');

const router = express.Router();

const {createProduct, getAllProducts, sendUserInfo} = require('../controllers/ProductController');
const {generateToken} = require('../controllers/JwtTokenController');
const {verifyToken} = require('../middlewares/authinticateMiddleware');

router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.get("/gettoken", generateToken);
router.get("/virifytoken", verifyToken, sendUserInfo);

module.exports = router;

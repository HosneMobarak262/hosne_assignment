const Product = require("../models/productModel");


// create Product
exports.createProduct = async (req, res) => {
    try {
        const {name, price, description} = req.body;

        if(!name){
            return res.json({message: "Please enter name"});
        }
        if(!price){
            return res.json({message: "Please enter price"});
        }

        const existingName = await Product.findOne({name});
        if(existingName){
            return res.json({message: "Name exists, please enter a different name."})
        }

        const createProduct = await new Product({
            name,
            price,
            description,
        }).save();

    } catch (err) {
        res.status(500).json({message: "Internal Server Error", error: err});
        console.log(err);
    }
}

// get all product
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}, "name price");

        res.json(products);
    } catch (err) {
        res.status(500).json({message: "Internal Server Error", error: err});
        console.log(err);
    }
}
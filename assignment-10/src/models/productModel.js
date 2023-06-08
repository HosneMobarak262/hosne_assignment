const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name:{
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
        },
    }, {timestamps: true, versionKey: false}
);

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
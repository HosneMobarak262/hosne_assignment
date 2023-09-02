const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        Quantity: {
            type: Number,
            required: true,
            min: 1
        }
},
    { timestamps: true, versionKey: false }
)

const CartModel = mongoose.model('cart', DataSchema);
module.exports=CartModel;
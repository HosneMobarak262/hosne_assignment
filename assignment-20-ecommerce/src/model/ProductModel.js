const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
    Name:{type: String, required: true},
    Description:{type: String, required: false},
    Price:{type: Number, required: true, min:0},
    Stock:{type: Number, required: true, min:0},
    Category:{type: String, required: true},
    ImageUrl:{type: String, required: false}
},
    { timestamps: true, versionKey: false }
)

const ProductModel = mongoose.model('product', DataSchema);
module.exports=ProductModel;
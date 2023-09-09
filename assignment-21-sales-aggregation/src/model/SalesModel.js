const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
    Product:{type: String, required: true},
    Quantity:{type: Number, required: true},
    Price:{type: Number, required: true},
    Date: {type: Date, required: true}
},
    { timestamps: true, versionKey: false }
)

const SalesModel = mongoose.model('sales', DataSchema);
module.exports=SalesModel;
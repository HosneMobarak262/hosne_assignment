const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        Items: [
            {
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
        ],
        TotalAmount: {
            type: Number,
            required: true,
            min: 0
        },
        ShippingAddress: {
            type: String,
            required: true,
        },
        Status: {
            type: String,
            required: true,
            default: 'Pending'
        }
},
    { timestamps: true, versionKey: false }
)

const OrderModel = mongoose.model('order', DataSchema);
module.exports=OrderModel;
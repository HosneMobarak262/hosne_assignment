const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
        name:{type:String, require:true},
        price:{type:Number, require: true},
        description:{type:String},
        category:{type:String},
        createdAt:{type:Date,default:Date.now()}
    },
    {versionKey:false}
);

const ProductModel=mongoose.model('products',DataSchema);
module.exports=ProductModel;
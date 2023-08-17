const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
    Title:{type: String, required: true},
    Text:{type: String, required: true},
    author:{type: String}
},
    { timestamps: true, versionKey: false }
)

const BlogModel = mongoose.model('blog', DataSchema);
module.exports=BlogModel;
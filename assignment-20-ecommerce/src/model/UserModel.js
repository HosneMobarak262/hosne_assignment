const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
    FirstName:{type: String, required: true},
    LastName:{type: String, required: true},
    Email:{type: String, required: true, unique: true},
    Password:{type: String, required: true},
    Address:{type: String, required: false},
    PhoneNumber:{type: String, required: false}
    },
    { timestamps: true, versionKey: false }
)

const UserModel = mongoose.model('blog', DataSchema);
module.exports=UserModel;
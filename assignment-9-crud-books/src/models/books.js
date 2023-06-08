const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        Title:{
            type: String,
            trim: true,
            require: true,
        },
        Author:{
            type: String,
            trim: true,
            require: true,
        },
        Description:{
            type: String,
            trim: true,
        },
        PublishedYear:{
            type: Number,
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
);

const books = mongoose.model("booksdb", bookSchema);
module.exports = books;
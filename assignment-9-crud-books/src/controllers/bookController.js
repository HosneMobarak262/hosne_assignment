const books = require("../models/books.js");

// create Book
exports.createbook = async (req, res) => {
    try{
        // destructure input fields
        const {Title, Author, Description, PublishedYear} = req.body;

        // console.log("Title");

        // required field validation
        if(!Title.trim()){
            return res.json({ error: "Title is Required."});
        }

        if(!Author.trim()){
            return res.json({ error: "Author is Required."});
        }

    //    check if book exists
        const existingBook = await books.findOne({Title});

        if(existingBook){
            return res.json({ error: "Title taken."});
        }

    //    save into db
        const bookVar = await new books({
            Title, Author, Description, PublishedYear
        }).save();

    //    send store response
        res.json({
            message : "Saved Successfully"
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get book by id
exports.getbookbyid = async (req, res) => {
    try {
        const book = await books.findById(req.params.id);
        if(!book){
            res.status(404).json({ error: "Requested book not found"});
        }else{
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error"});
        console.log(error);
    }
}

// get all books
exports.getallbooks = async (req, res) => {
    try {
        const book = await books.find();
        res.json(book);

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error"});
        console.log(error);
    }
}

// update book
exports.updatebook = async (req, res) => {
    try {
        const book = await books.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book){
            return res.status(404).json({ error: 'The Book is not found' });
        }else{
            res.json({book})
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error"});
        console.log(error);
    }
}

// delete book
exports.deletebook = async (req, res) => {
    try {
        const book = await books.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({ error: "Book not found"});
        }else{
            res.status(204).json({book});
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error"});
        console.log(error);
    }
}
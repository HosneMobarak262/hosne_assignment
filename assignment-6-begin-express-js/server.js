const express = require('express');
const path = require('path');
const {v4 : uuidv4} = require('uuid');

const app = express();
app.use(express.json());

const port = 6000;

// initial route
app.get('/', function (req,res){
   res.sendFile(__dirname + "/node.html");
});

let books = [];

// books route
app.get("/books", (req, res) =>{
   res.json(books);
});

// books insert route
app.post("/books",
    (req, res) => {
       const {title, author, publishedDate} = req.body;

       const id = uuidv4();

       if (!title) {
          return res.status(400).json({error: "Title is required."})
       }
       if (!author) {
          return res.status(400).json({error: "Author is required."})
       }
       books.push({id, title, author, publishedDate});
       res.json({id, title, author, publishedDate});
    });

// book delete
app.delete("/books/:id", (req, res) => {
   const {id} = req.params;

   const checkBookIndex = books.findIndex((book) => book.id === id);

   // res.json({"id": id, "check": checkBookIndex});

    if(checkBookIndex >= 0){
        books.splice(checkBookIndex, 1);
        res.json({"message" : `The book with ID ${id} has been deleted successfully.`});
    } else {
        res.status(404).json({"message" : `The book with ID ${id} is not found.`});
    }
});

console.log("Server running successfully on port: " . port);
app.listen(port);
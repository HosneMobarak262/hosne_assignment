const express = require('express');

const router = express.Router();

const {createbook, deletebook, getallbooks, getbookbyid, updatebook} = require("../controllers/bookController.js");

// create book
router.post("/books", createbook);

// get all books
router.get("/books", getallbooks);

// get books by ID
router.get("/books/:id", getbookbyid);

// update book
router.put("/books/:id",updatebook );

// delete book
router.delete("/books/:id", deletebook);

module.exports = router;

const { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');
const router = require('./src/routes/book');


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())


app.use("/api/v1/", router);


//server
port = process.env.PORT || 8000;

// connect DB
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(port, () =>{
            console.log(`Server Running on port: ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
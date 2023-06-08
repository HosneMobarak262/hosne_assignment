const express = require('express');
const router = require("./src/routes/routes");
const app = new express();
const bodyParser = require('body-parser');

// security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

// security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(bodyParser.json());

// request rate limit
const limiter = rateLimit({
    windowMs: 15*60*1000, // 15 Minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);


const port = process.env.PORT || 8000;


// mongoDb connection
mongoose
    .connect(process.env.DATABASE, {autoIndex: true})
    .then(()=>{
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        })
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

// routers
app.use("/api/v1", router);

app.use("*", (req, res) => {
    res.status(404).json({
        status: "failed",
        msg: "You have entered a wrong URL. Please enter the correct one.",
    });
});
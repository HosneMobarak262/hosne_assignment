const express=require('express');
const router=require('./src/route/api');
const app = express();
const bodyParser=require('body-parser');

// Security Middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');

// Dotenv
const dotenv = require('dotenv');

// Database
const mongoose=require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser
app.use(bodyParser.json());

// dotenv
dotenv.config()

// Rate Limiter
const limiter=rateLimit({windowMs:15*60*100,max:3600});
app.use(limiter);

// Database Connection

let OPTION = {user:process.env.USER, pass:process.env.PASSWORD, autoIndex:true};

mongoose.connect(process.env.URI, OPTION)
    .then(res => console.log("Database Connected Successfully."))
    .catch(error => console.log(error))

// Managing Front End Routing Start
// app.use(express.static('client/build'))
// app.get("*", function (req,res){
//     req.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
// })
// Managing Front End Routing End

// Managing BackEnd API Routing
app.use("/api/v1",router);
module.exports=app;
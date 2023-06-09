const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    try{
        const token = req.headers["token"];

        // if token not sent, response unauthorized
        if(!token){
            res.status(404).json({status: "fail", message: "Unauthorized"})
        }

        // decode token
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            if(error) {
                res.status(401).json({status: "fail", message: "Error verifying token"});
            }

            req.user = decoded;
        });

        // check for static user name and passowrd
        if(req.user["userId"] == "hosne" && req.user["password"] == "12345678"){
            // res.status(200).json({status: "success", message: req.user});

            // jump to next method
            next();
        } else {
            res.status(200).json({status: "fail", message: "Wrong user name and/or password. "});
        }



    } catch (err) {
        res.json({message: "Internal Server Error. Could not verify token.", error: err});
        console.log(err);
    }
};
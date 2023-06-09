const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
   try{
       const {userId, password} = req.body;

       if(!userId){
           return res.json({message: "Please enter userId"});
       }
       if(!password || password.length < 8 ){
           return res.json({message: "Please enter password with minimum length of 8."});
       }

       const payload = { userId: userId, password: password };
       const secretKey = process.env.JWT_SECRET_KEY;
       const expiresIn = '6h';

   //    generate token
       const generateToken = (payload, secretKey, expiresIn) => {
           return jwt.sign(payload, secretKey, {expiresIn});
       };

       const token = generateToken(payload, secretKey, expiresIn);

       res.status(200).json({token: token});

   } catch (err) {
       res.json({message: "Internal Server Error. Could not generate token.", error: err});
       console.log(err);
   }
};

const jwt = require("jsonwebtoken");
const con = require("../model/db.connect");
const keysecret = process.env.JWT_TOKEN


const authenticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        
        const verifytoken = jwt.verify(token,keysecret);

        console.log(verifytoken);
        
        const rootUser = await user.body({email:verifytoken.email});
         
        console.log(rootUser);
        // if(!rootUser) {throw new Error("user not found")}

        // req.token = token
        // req.rootUser = rootUser
        // req.userId = rootUser._id

        // next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


module.exports = authenticate
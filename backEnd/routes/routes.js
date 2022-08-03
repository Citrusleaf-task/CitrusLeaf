const express = require("express");

const routes = express.Router();
const {register,login} = require("../controller/authtication.controller")
const {singleUserTask,updateById,deleteTaskById,taskAdd} = require("../controller/userController")
const authenticate = require("../middleware/authenticate");
const multer = require("multer");


const upload = multer({
    Storage: multer.diskStorage({
        destination: function (req,file,cb){
            cb(null,"../multer/file")
        },
        filename: function (req, res, cb){
            cb(null,file.fieldname )
        } 
    })
})

// routes.get("/user", all);
routes.post("/login", login);
routes.post("/register",register);
routes.post("/add-task",upload.single("attachment"),taskAdd)
routes.get("/", singleUserTask);
routes.put("/user", updateById);
routes.delete("/user", deleteTaskById);

// user valid
// routes.get("/validuser",authenticate,async(req,res)=>{
//     console.log(res)
//     // try {
//     //     const ValidUserOne = await userdb.findOne({_id:req.userId});
//     //     res.status(201).json({status:201,ValidUserOne});
//     // } catch (error) {
//     //     res.status(401).json({status:401,error});
//     // }
// });

module.exports = { routes };

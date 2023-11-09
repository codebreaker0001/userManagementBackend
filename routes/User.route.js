const express =  require("express");
const { getUser, registerUser, loginUser } = require("../controller/userController");

const userRoute = express.Router();


userRoute.post("/register",registerUser) 

userRoute.post("/login",loginUser) 



module.exports = { userRoute}
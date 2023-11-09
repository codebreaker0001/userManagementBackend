const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route");
const { connectToDatabase } = require("./config/db.connection");
require("dotenv").config()

const app=express();

const PORT = 3001;
app.use(cors());
app.use(express.json()) 

app.use("/",userRoute)  

app.listen(PORT,async()=>{
    await connectToDatabase()
    console.log("Server Started on PORT NO:",PORT)
})
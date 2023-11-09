const mongoose = require("mongoose");

const connectToDatabase=async()=>{mongoose.connect("mongodb+srv://auth2:Adarsh123456@cluster0.poo2vrz.mongodb.net/user").then((con)=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log("Error While Connecting to DB",err.message)
})}

module.exports ={connectToDatabase};
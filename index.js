const fs = require("fs")
const express = require("express")
const mongoose  = require("mongoose")

const app = express()
const port = 3000
const User = require("./model/user")

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/UserDataDB").
then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log("Database can't be connnected")
})

app.post("/",async(req,res)=>{
    const userData = new User(req.body)
    await userData.save()
    let a = fs.readFileSync("p1.html")
    res.send(a.toString())
})

app.get("/",(req,res) =>{
    let a = fs.readFileSync("index.html")
    res.send(a.toString())
})

app.listen(port, ()=>{
    console.log("App running on:",port)
})
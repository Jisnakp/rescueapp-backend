const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const loginModel = require("./admin")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jisnab01:jisnab01@cluster0.tnvz6eq.mongodb.net/rescuedb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{res.json({"status":"success"})})

app.post("/adminSignin",(req,res)=>{

    let input=req.body
    if (input.username=="admin" && input.password=="12345") 
        {

      res.json({"status":"success"})
    } else {

        res.json({"status":"Invalid credentials"})
        
    }
})


app.post("/adminSignUp",(req,res)=>{

      let input=req.body
      let hashedPassword=bcrypt.hashSync(input.password,10)
      //console.log(hashedPassword)
      input.password=hashedPassword
      console.log(input)
      let result=new loginModel(input)
      result.save()
      res.json({ "status": "success"})

})


app.listen(8082,()=>{
    console.log("server started")
})
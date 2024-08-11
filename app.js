const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cors=require("cors")
const loginModel = require("./admin")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jisnab01:jisnab01@cluster0.tnvz6eq.mongodb.net/rescuedb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{res.json({"status":"success"})})

app.post("/adminSignin",(req,res)=>{

    let input=req.body
    let result=loginModel.find({username:input.username}).then(
        (response)=>{
            if (response.length>0) {

                const validator=bcrypt.compareSync(input.password,response[0].password)
                if (validator) {
                    
                    jwt.sign({email:input.username},"rescue-app",{expiresIn:"3d"},

                        (error,token)=>{
                            if (error) {

                                res.json({"status":"Invalid Authentication"})
                                
                            } else {
                                res.json({"status":"success","token":token})
                                
                            }
                        }
                    )



                } else {
                    res.json({"status":"Invalid Password"})
                }
                
            } else {
                res.json({"status":"Invalid Username"})
                
            }
        }
    ).catch()
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
const mongoose=require("mongoose")
const LoginSchema=mongoose.Schema(

    {
        username:String,
        password:String
    }
)
const loginModel=mongoose.model("logindata",LoginSchema)
module.exports=loginModel

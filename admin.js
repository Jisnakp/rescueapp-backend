const mongoose=require("mongoose")
const LoginSchema=mongoose.Schema(

    {
        username:{type:String},
        password:{type:String}
    }
)
const loginModel=mongoose.model("logindata",LoginSchema)
module.exports=loginModel

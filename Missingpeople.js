const mongoose=require("mongoose")
const PeopleSchema=mongoose.Schema(
    {
        firstname:{type:String},
        lastname:{type:String},
        phone:{type:String},
        village:{type:String},
        place:{type:String},
        pincode:{type:String},
        housenumber:{type:String},
        missingdate:{type:String},
        aadhar:{type:String},
        gender:{type:String},
        age:{type:String}
       
    }
)
const PeopleModel=mongoose.model("people",PeopleSchema)
module.exports=PeopleModel
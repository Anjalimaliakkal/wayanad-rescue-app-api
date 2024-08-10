const mongoose=require("mongoose")
const PeopleSchema=mongoose.Schema(
    {
        name:String,
        phone:String,
        village:String,
        place:String,
        pincode:String,
        houseNo:String,
        missingDate:String,
        aadharNo:String,
        gender:String,
        age:String
    }
)

const PeopleModel=mongoose.model("peopledata",PeopleSchema)
module.exports=PeopleModel
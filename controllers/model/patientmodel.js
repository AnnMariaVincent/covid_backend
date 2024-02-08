
const mongoose=require("mongoose");
const patientmodel=new mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    symptoms:String,
    status:String

   


})
module.exports=mongoose.model("patient",patientmodel);


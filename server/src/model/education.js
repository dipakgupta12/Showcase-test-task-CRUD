import mongoose from "mongoose";

const FieldSchema = new mongoose.Schema({
    nameofschool:{
        type:String,
        required:true,   
        unique:true,
    },
    degree:{
        type:String,
        required:true,   
        unique:true,
    },
    fieldofstudy:{
        type:String,
        required:true,
    },
    startyear:{
        type:Date,
        required:true,
    },
    endyear:{
        type:Date,
        required:true,
    },
    grade:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true}
)

export default  mongoose.model("records",FieldSchema)
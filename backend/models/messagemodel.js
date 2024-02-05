const mongoose=require('mongoose')
const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",   
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});
const message=mongoose.model("message",messageSchema)
module.exports=message;
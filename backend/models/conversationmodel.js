const mongoose=require('mongoose')
const conversationschema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
}],
message:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'message',
        default:[]
    }
]
},{timestamps:true})
const Coversation=mongoose.model("Conversation",conversationschema);
module.exports=Coversation
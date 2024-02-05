const Conversation = require("../models/conversationmodel");
const Message = require("../models/messagemodel");

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const { _id: senderId } = req.user;

        let conv = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conv) {
            conv = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        });

        conv.message.push(newMessage._id);

        await Promise.all([conv.save(), newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getMessages=async(req,res)=>{
    try {
        const {id:userTochatId}=req.params
        const senderId=req.user._id;
        const conv =await Conversation.findOne({
            participants:{$all:[senderId,userTochatId]}
        }).populate("message")
    if (!conv) return res.status(200).json([])
    
    res.status(200).json({messages:conv.message})
    }catch{
 
    }
}

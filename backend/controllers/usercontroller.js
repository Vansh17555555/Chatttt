const User=require('../models/usermodel')
const getUsersForSidebar=async(req,res)=>{
    try{
     const loggedInUserId=req.user._id;
     const allusers=await User.findById({_id:{$ne:loggedInUserId}}) .select("-password")  
    res.status(200).json(allusers)
    }
    catch(error){
        res.status(500).json({error:"Internal server erro"})
    }
}
module.exports=getUsersForSidebar
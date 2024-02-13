const bycryptjs=require('bcryptjs')
const generateTokenandSetCookies=require('./../utils/generatetoken');
const User = require('./../models/usermodel');
exports.loginUser=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username})
        const isPasswordCorrect=await bycryptjs.compare(password,user?.password||"");
        if((!user)||!isPasswordCorrect){
            return res.status(400).json({error:"Ivalid username"})
        }
        generateTokenandSetCookies(user._id,res);
        res.status(200).json({
            message:"login SuccessFul"
        })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
exports.logoutUser=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logged out successfully"})
    }
    catch{
       console.log(error) 
    }
}
exports.signupUser=async(req,res)=>{
    try{
        const {fullname,username,password,confirmpassword,gender}=req.body
        if(password!==confirmpassword){
            return res.status(400).json({
                message:"passwords do not match"
            })
        }
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({message:"user already exists"})
        }
    const salt=await bycryptjs.genSalt(10);
    const hashedPassword=await bycryptjs.hash(password,salt)
    //https://avator-placeholder.iran.liara.run/
    const maleProfilepic=`https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`
    const femaleprofilepic=`https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`
    const newUser=new User({
        fullname,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==='male'?maleProfilepic:femaleprofilepic
    })
    generateTokenandSetCookies(newUser._id,res);
    await newUser.save()
    res.status(201).json({
        newUser
    })
}catch(error){
        console.log(error)
    }
}
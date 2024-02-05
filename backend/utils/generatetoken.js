const jwt=require('jsonwebtoken')
const generateTokenandSetCookies=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'5h'})
    res.cookie("jwt",token,{
        maxAge:15*24*60*1000,
        httpOnly:true,
        sameSite:"Strict",
        secure:process.env.NODE_ENV!=="development"
    })
}
module.exports=generateTokenandSetCookies;
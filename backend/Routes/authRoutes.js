const express=require('express')
const authcontroller=require('../controllers/authcontroller')
const router=express.Router()
router.post('/login',authcontroller.loginUser)
router.post('/signup',authcontroller.signupUser)
router.get('/hello',(req,res)=>{
    res.send("hello cutie")
})
router.post('/logout',authcontroller.logoutUser)
module.exports=router;
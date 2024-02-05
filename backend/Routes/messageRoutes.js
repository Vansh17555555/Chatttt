const express=require('express')
const messagecontroller=require('../controllers/messageController')
const protectRoute=require('../middleware/protectRoute')
const router=express.Router()
router.get("/:id",protectRoute,messagecontroller.getMessages)
router.post('/send/:id',protectRoute,messagecontroller.sendMessage)
module.exports=router;
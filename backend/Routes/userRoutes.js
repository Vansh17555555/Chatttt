const express=require("express")
const router=express.Router();
const protectRoute=require("../middleware/protectRoute")
const usercontroller=require('../controllers/usercontroller')
router.get('/',protectRoute,usercontroller.getUsersForSidebar);
module.exports=router
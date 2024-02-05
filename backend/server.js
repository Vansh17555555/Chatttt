const express=require('express')
const path=require('path')
const cookieparser=require('cookie-parser')
const messageRoutes=require('./Routes/messageRoutes')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const app=express()
const cors=require('cors')
const userRoutes=require("./Routes/userRoutes")
const authRoutes=require('./Routes/authRoutes')
const connectToMongodb = require('./db/connecttoMongodb')
const cookieParser = require('cookie-parser')
const PORT=process.env.PORT;
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use(cookieparser())
app.use("/api/messages",messageRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT,()=>{
    connectToMongodb()
    console.log(`Server running on port ${PORT}`)}
    )
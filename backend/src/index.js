import express from 'express'
import dotenv from 'dotenv'
import authRoutes  from './routes/auth.route.js'
import messageRoutes   from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
dotenv.config()
const app=express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
           origin: "http://localhost:5173",
           credentials:true
}))


app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.listen(port,()=>{
        console.log(`server is listening on port no. ${port}`)
        connectDB()
})


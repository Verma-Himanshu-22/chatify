import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
export const connectDB=async()=>{
      try {
        const connect=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB connected successfully : ${connect.connection.host}`)
      } catch (error) {
          console.log('mongoDB connection error :',error)
      }
}
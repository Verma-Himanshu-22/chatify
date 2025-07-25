import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const generateToken = (userId,res) => {

  const   token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
  })

  res.cookie("jwt",token,{
    httpOnly:true,
      secure:process.env.NODE_ENV !== "development",
      sameSite:"Strict",
      maxAge: 7*24*60*60*1000 // cookie expires in 7 days
  })

  return token

};

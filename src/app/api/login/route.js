import {connect} from "../../../../helpers/dbConnection"
import User from "../../../../models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(){
    connect()
    try{
            const reqBody = await NextRequest.json();
            const{email,password} = reqBody
           const user = await User.findOne({email:email})
// check if user email exists
            if(!user){
                return NextResponse.json({message:"User Email do not exists"}, {status:400})
            }
                const validatePassword = await bcryptjs.compare(password,user.password)
            if(!validatePassword){
                return NextResponse.json({message:"password not correct, invalid check again"}, {status:400})
            }


            // create token data

            const userTokenData = {
                id : user._id,
                email : user.email,
                password: user.password
            }

            const userToken = await jwt.sign(userTokenData, process.env.TOKEN_SECRET, {expiresIn:"1h"})

            const response = NextResponse.json({message:"login successful"})

            response.cookies.set("token",userToken, {
                httpOnly : true
            })

            // create new user
           

            return response

             
    }
    catch(error){
            return NextResponse.json({error:error.message}, {status:500})
    }
}
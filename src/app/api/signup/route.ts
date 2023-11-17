import {connect} from "../../../../helpers/dbConnection"
import User from "../../../../models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export async function POST(request:NextRequest, response:NextResponse){
    connect()
    try{
            const reqBody = await request.json();
            const{username,email,password} = reqBody
           const user = await User.findOne({email:email})
// check if user email exists
            if(user){
                return NextResponse.json({message:"User Email already exists"}, {status:400})
            }

            // hash password
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password,salt)

            // create new user
           const newUser =   new User({
                username,email,hashedPassword
             })
            await newUser.save();

            return NextResponse.json({message:"User created", newUser}, {status:200})

             
    }
    catch(error:any){

    }
}
import {NextRequest, NextResponse} from "next/server"
import {getUserToken} from "../../../../helpers/dbConnection/getUserdetails"
import {connect} from "../../../../helpers/dbConnection"
import User from "../../../../models/userModel"



export async function GET(){

    connect()

    try{
        const userTokenId = getUserToken()

        const UserDetails = await User.findOne({_id:userTokenId})

        if(UserDetails){
            return NextResponse.json({
                message:"User found",
                data:UserDetails
            }, {status:200})
        }

        else{
                    NextResponse.json({
                        message:"User do not exists",
                        data:null
                    }, {status:400})
        }

       
    }

    catch(err){

    }

}
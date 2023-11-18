import {NextResponse,NextRequest} from "next/server"
import jwt from "jsonwebtoken"


export function getDataFromToken(){
const userToken = NextRequest.cookies.get('token')

const decodedToken = jwt.verify(userToken,process.env.TOKEN_SECRET)

return NextResponse.json({id:decodedToken.id})


}
import { NextResponse } from "next/server";
import  { NextRequest } from "next/server";


export function middleware(){
    const path = NextRequest.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup'

    const token = NextRequest.cookies.get('token')
    if(NextRequest.nextUrl.pathname === '/login' || NextRequest.nextUrl.pathname === "/signup" || token){
        const url = NextRequest.nextUrl.clone()
        url.pathname = "/"

        return NextResponse.redirect(url)
    }

    else{
        const url = NextRequest.nextUrl.clone()
        url.pathname = "/login"

        return NextResponse.redirect(url)
    }

    // see Matching paths

}


export const config = {
    matcher : [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}
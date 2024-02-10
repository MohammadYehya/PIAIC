import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest)
{
    let LoggedIn = false;
    const path = request.nextUrl.pathname;

    //request.url gives the url of the current program
    if(!LoggedIn && path === '/Lecture11/Dashboard')
        return NextResponse.redirect(new URL('/Lecture11/Login', request.url));
    else if(LoggedIn && path === '/Lecture11/Login')
        return NextResponse.redirect(new URL('/Lecture11/Dashboard', request.url))
    else
        return NextResponse.next();
}


// This variable makes sure that 
 

// export const config = 
// {
//     matcher: ['/Lecture11/Dashboard']
// };
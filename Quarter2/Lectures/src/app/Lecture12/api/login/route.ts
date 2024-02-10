import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose"


export async function POST(request: NextRequest)
{
    let body = await request.json()
    
    //Temp database values
    let email = "abc@gmail.com"
    let pass = '12345'

    const secret = new TextEncoder().encode('123456');

    //Creating JWT Tokens
    const jwt = await new jose.SignJWT({ email: body.email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret)

    if(body.email !== email || body.pass !== pass)
        return NextResponse.json({message: "Invalid email or password!"})

    console.log(body)
    return NextResponse.json({jwt})
}
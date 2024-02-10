import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let data = {name: "ABC", age: 20, job: "Developer"};
    return NextResponse.json({message: "API Success!", data});
}
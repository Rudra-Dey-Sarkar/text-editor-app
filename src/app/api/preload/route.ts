"use server"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch("http://loripsum.net/api/random");
    const text = await response.text();
   return NextResponse.json({status:200, message:text});
  } catch (error) {
    console.log("Failed to fetch data due to :-", error);
   return NextResponse.json({status:500, message:"Failed to fetch data"});
  }
}

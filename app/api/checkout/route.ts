import { NextResponse } from "next/server";
export async function POST(req:Request){
 const body=await req.json();
 if(!body?.email || !body?.items?.length) return NextResponse.json({message:"Add an item and enter your email."},{status:400});
 // Production: create the order in Prisma, calculate all prices server-side,
 // then call the bKash create endpoint and return only the redirect URL.
 return NextResponse.json({message:"Checkout API scaffold is ready. Connect Prisma + bKash credentials in .env.local."});
}
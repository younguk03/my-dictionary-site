import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Dic from "@/models/dic";

export async function GET() {
   try {
      await connectMongoDB();
   const sports = await Dic.find({kategorie:"스포츠"}).sort({createdAt:-1});
   console.log(sports)
   return NextResponse.json(sports);
   } catch (error) {
      console.log(error);
      return NextResponse.json({error:"Error fetching sports data"},{status:500});
   }
   
}

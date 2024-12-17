import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Dic from "@/models/dic";

export async function GET() {
   try {
      await connectMongoDB();
      // let latest = null
      
      const food = await Dic.find({ kategorie: "음식" }).sort({ createdAt: -1 });
      // while(food.())
      console.log(food)
      return NextResponse.json(food);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error fetching food data" }, { status: 500 });
   }

}

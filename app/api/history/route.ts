import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Dic from "@/models/dic";

export async function GET() {
   try {
      await connectMongoDB();
      const history = await Dic.find({ kategorie: "역사" }).sort({ createdAt: -1 });
      console.log(history)
      return NextResponse.json(history);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error fetching history data" }, { status: 500 });
   }

}
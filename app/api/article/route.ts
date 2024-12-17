import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Dic from "@/models/dic";

export async function GET() {
   try {
      await connectMongoDB();
      const article = await Dic.find({ kategorie: "물품" }).sort({ createdAt: -1 });
      console.log(article)
      return NextResponse.json(article);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error fetching article data" }, { status: 500 });
   }

}
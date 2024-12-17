import {NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Dic from "@/models/dic";

export async function GET() {
   try {
      await connectMongoDB();

      const creature = await Dic.find({ kategorie: "생물" }).sort({ createdAt: -1 })
      // console.log(creature)

      return NextResponse.json(creature);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error fetching food data" }, { status: 500 });
   }

}

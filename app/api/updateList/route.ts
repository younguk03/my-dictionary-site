import Dic from "@/models/dic";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      const dics = await Dic.find().sort({ createdAt: -1 }).limit(10);  // 최신 10개만 가져오기
      return NextResponse.json(dics);
   } catch (error) {
      console.error('Error fetching dics:', error);
   }
}
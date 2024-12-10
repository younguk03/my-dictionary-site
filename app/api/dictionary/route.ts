import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Dic from '@/models/dic';

export async function GET(request: Request) {
   try {
      await connectMongoDB();
      const { searchParams } = new URL(request.url);
      const title = searchParams.get('title');
      const searchTitle = title || '';
      const dic = await Dic.find({ "title": { $regex: new RegExp(searchTitle, "i") } }).sort({ createdAt: -1 });
      console.log(dic);
      return NextResponse.json(dic);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error fetching dictionary data" }, { status: 500 });
   }
} 
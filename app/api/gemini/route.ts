import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
      const apikey = process.env.GEMINI_API_KEY;
      if (!apikey) {
         return NextResponse.json({ error: 'API Key not found' }, { status: 500 });
      }
      const genAI = new GoogleGenerativeAI(apikey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const { prompt } = await req.json();
      console.log(prompt);

      if (!prompt) {
         return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
      }

      const result = await model.generateContent(prompt);
      console.log(result);
      const response = await result.response;
      const text = response.text();
      return NextResponse.json({ text });
   } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
   }
}
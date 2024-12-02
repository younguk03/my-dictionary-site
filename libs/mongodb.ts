import mongoose from "mongoose";

export default async function connectMongoDB() {
   try {
      await mongoose.connect(process.env.MONGODB_URL as string)
      console.log("connected to MongoDB. 몽고디비 연결 완료");
   } catch (error) {
      console.log(error);
   }
}
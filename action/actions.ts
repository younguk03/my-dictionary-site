'use server'
import connectMongoDB from "@/libs/mongodb";
import { revalidatePath } from "next/cache";
import { convertDocToObj } from "@/libs/helpers";
import Dic from "@/models/dic";

//1. create 
export async function createDic(title: string, description: string) {
   try {
      await connectMongoDB()
      const doc = await Dic.create({ title, description })
      revalidatePath('/')
      return { success: true, dic: convertDocToObj(doc) }
   } catch (error) {
      throw new Error(`토픽 생성에 실패했습니다. ${error}`)
   }
}


// 2. Edit 
export async function updateDic(id: string, title: string, description: string) {
   try {
      await connectMongoDB()
      const doc = await Dic.findByIdAndUpdate(
         id,
         { title, description },
         { new: true }
      )
      if (!doc) throw new Error('토픽을 찾을 수 없습니다.')
      revalidatePath('/')
      return { success: true, dic: convertDocToObj(doc) }
   } catch (error) {
      throw new Error(`토픽 수정에 실패했습니다. ${error}`)
   }
}

// 3. GET by ID
export async function getDic(id: string) {
   try {
      await connectMongoDB()
      const doc = await Dic.findById(id)
      if (!doc) {
         throw new Error(`문서 수정에 실패했습니다.`)
      }
      return { success: true, dic:convertDocToObj(doc) }
   } catch (error) {
      throw new Error(`문서 수정에 실패했습니다. ${error}`)
   }
}

// 4. GET all
export async function getAllDics() {
   try {
      await connectMongoDB()
      const docs = await Dic.find({}).sort({ createdAt: -1 })
      const dics = docs.map((doc) => convertDocToObj(doc))
      return { success: true, dics }
   } catch (error) {
      throw new Error(`모든 문서 조회에 실패했습니다 ${error}`)
   }
}

// 5. DELETE
export async function deleteDic(id: string) {
   try {
      await connectMongoDB()
      const doc = await Dic.findByIdAndDelete(id)
      if (!doc) await new Error('문서를 찾을 수 없습니다.')
      revalidatePath('/')
      return { success: true }
   } catch (error) {
      throw new Error(`문서 삭제를 실패했습니다. ${error}`)
   }
}
import { Dic } from "@/types/dic";


export function convertDocToObj(doc:Dic){
   return {
      _id: doc._id.toString(),
      title:doc.title,
      description:doc.description,
      kategorie:doc.kategorie,
   }
}
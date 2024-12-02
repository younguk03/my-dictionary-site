import mongoose, { Schema } from "mongoose";

const dicSchema = new Schema({
   title:String,
   description:String
}, {timestamps:true})

const Dic = mongoose.models.Dic || mongoose.model('Dic',dicSchema);
export default Dic
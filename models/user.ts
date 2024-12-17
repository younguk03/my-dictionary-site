import mongoose, { Model, Schema } from 'mongoose'

interface IUser {
   name: string
   email: string
   role: {
      type: string
      enum: ['user', 'admin']
      default: 'user'
   }
}
const userSchema = new Schema<IUser>({
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   role: { type: String, enum: ['user', 'admin'], default: 'user' },
})


let User: Model<IUser>
try {
   User = mongoose.model<IUser>('User')
} catch {
   User = mongoose.model<IUser>('User', userSchema)
}
export default User
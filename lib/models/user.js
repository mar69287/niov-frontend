import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true}
})

const User = models.User || model('User', UserSchema)

export default User

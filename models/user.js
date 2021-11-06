import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: String,
    googleId: String,
    isAdmin: {type: Boolean, default: false},
    profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    inquriesMade: {type: mongoose.Schema.Types.ObjectId, ref:"inquirySchema"}
  },
  {
    timestamps: true,
  }
)
  
const User = mongoose.model('User', userSchema)
  
export {
  User
}
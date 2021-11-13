import mongoose from 'mongoose'

const Schema = mongoose.Schema

//For future email feature
// const inquirySchema = new mongoose.Schema({
//   email: String,
//   content: String,
// })

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  //For future feature:
  // inquiriesMade: [{ type: Schema.Types.ObjectId, ref: inquirySchema }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
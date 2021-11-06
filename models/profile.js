import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema({
  //owner:
  email: String,
  content: String,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  inquiriesMade: [{type: Schema.Types.ObjectId, ref: inquirySchema}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
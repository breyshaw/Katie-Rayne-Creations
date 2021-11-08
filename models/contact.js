import mongoose from 'mongoose'

const Schema = mongoose.Schema

const inquirySchema = new mongoose.Schema({
    //owner:
    email: String,
    content: String,
  })

  const Contact = mongoose.model('Contact', inquirySchema)

  export {
      Contact
  }
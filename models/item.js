import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    // author: {reference author here with correct syntax}
    content: String,
    rating: {type: Number, min: 1, max: 5},

})

const itemSchema = new Schema({
    title: {String, required: true},
    imageUrl: String,
    typeOfItem: String,
    price: Number,
    reviews: [reviewSchema]
})

const Item = mongoose.model('Item', itemSchema)


export {
    Item,
}
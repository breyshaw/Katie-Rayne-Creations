import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:"Profile"},
    content: String,
    rating: {type: Number, min: 1, max: 5},
}, {
    timestamps: true
})

const itemSchema = new Schema({
    title: String,
    imageUrl: String,
    typeOfItem: String,
    price: Number,
    info: String,
    reviews: [reviewSchema]
})

const Item = mongoose.model('Item', itemSchema)


export {
    Item,
}
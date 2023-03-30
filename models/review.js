import { Schema, model } from 'mongoose'

const review = new Schema({
    like: {
        type: Number
    }, comment: {
        type: String
    }, user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }, recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipes",
        required: true
    },
});


const Review = new model("Review", review);

export default Review;
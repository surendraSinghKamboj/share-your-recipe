import { Schema, model } from 'mongoose'

const review = new Schema({
    like: {
        type: Number
    }, comment: {
        type: String
    }
});


const Review = new model("Review", review);

export default Review;
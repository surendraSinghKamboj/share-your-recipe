import { Schema, model } from "mongoose";


const recipe = new Schema({
    title: {
        type: String,
        required: true
    },
    ingradients: {
        type: Array,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
});

const Recipes = new model("Recipes", recipe);

export default Recipes;
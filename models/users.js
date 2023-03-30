import { Schema, model } from 'mongoose'


const user = new Schema({
    name: { type: String, required: true },
    profile: { type: String, },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = new model("Users", user);

export default User;
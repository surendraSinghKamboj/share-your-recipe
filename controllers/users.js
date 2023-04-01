import User from "../models/users.js"
import { response } from "../utils/response.js"

export const createUser = async (req, res) => {
    const { name, profile, email, phone, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) response(res, 300, "user already registered")
        const result = await User.create({ name, profile, email, phone, password })
        if (result) response(res, 201, "account created successfull", { name: result.name, email: result.email })
    } catch (error) {
        return response(res, 404, "some error in catch")
    }
}
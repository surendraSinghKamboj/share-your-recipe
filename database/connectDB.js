import mongoose from "mongoose";

const connectDb = async (db_path) => {
    try {
        const status = await mongoose.connect(db_path, { dbName: "recipe" });
        if (status) console.log("Database connected Successfully........")
    } catch (error) {
        throw Error("Database connection failed...")
    }
}

export default connectDb;
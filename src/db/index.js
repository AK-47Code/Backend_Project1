import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`MongoDB connected Succesfully!! HOST:${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(`MONGODB CONNECTION ERROR ${error}`)
        process.exit(1)
    }
}
export default connectDB
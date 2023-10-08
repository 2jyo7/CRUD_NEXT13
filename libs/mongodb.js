import mongoose from "mongoose";



const connectDB = async () => {
    try {
      await  mongoose.connect(process.env.mongoDB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting:", error);
    }
}

export default connectDB;



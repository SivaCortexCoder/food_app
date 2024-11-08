import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://officialsiva001:9500059697@cluster0.kf0es.mongodb.net/food-app1').then(()=>console.log("DB CONNECTED"));
}
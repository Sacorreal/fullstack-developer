import mongoose from "mongoose";

const URL = 'mongodb+srv://administrador:admin123@mongodb101.is4h16h.mongodb.net/social?retryWrites=true&w=majority'

export const dbConnection = async ()=>{
    await mongoose.connect(URL)
}

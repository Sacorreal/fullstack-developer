import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, require: true},
    password: {type: String, require: true} 
})

export const User = mongoose.model("User", userSchema) 


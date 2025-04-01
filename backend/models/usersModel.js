// usersModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }); // Add timestamps: true to keep track of when users were created/updated.

export const User = mongoose.model('User', userSchema);

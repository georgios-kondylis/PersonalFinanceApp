// mongoDB.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

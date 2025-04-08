// usersRoutes

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/usersModel.js"; 
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Register Route  | http://localhost:5000/api/users/register 
// After deploy backend https://personalfinanceapp-production.up.railway.app/api/users/register
router.post("/register", async (req, res) => { 
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const emailLower = email.toLowerCase();

    // Check if email already exists
    const existingUser = await User.findOne({ email: emailLower });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: emailLower,
      password: hashedPassword, // Store hashed password
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created successfully", userId: savedUser._id });

  } catch (error) {
    res.status(500).json({ error: "Failed to create user", details: error.message });
  }
});

router.post("/login", async (req, res) => { 
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }

    const emailLower = email.toLowerCase();
    
    // Check if user exists
    const user = await User.findOne({ email: emailLower }).select("name email password");
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (!JWT_SECRET) {
      return res.status(500).json({ error: "Server error: Missing JWT secret" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "2h" });

    return res.status(200).json({ message: "Login successful", token, user: { name: user.name, email: user.email} });

  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error.message });
  }
});

export default router;

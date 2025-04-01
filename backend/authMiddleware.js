import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized, no token provided" });
    }

    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.user = decoded.userId; // Attach user ID to request

    next(); // Continue to the protected route
  } catch (error) {
    res.status(401).json({ error: "Unauthorized, invalid token" });
  }
};

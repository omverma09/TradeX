// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../schemas/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1]; 
    // frontend se bhejna hoga =>  Authorization: "Bearer <token>"
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); 
    // password ko exclude kar diya

    if (!req.user) {
      return res.status(401).json({ error: "User not found" });
    }

    next(); // ✅ Agle route pe jao
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
module.exports = authMiddleware;

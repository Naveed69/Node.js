const bcrypt = require("bcrypt");
const JWT_KEY = "NaveedDesai";
const jwt = require("jsonwebtoken");
const Authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Please login" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Please login" });
  } else {
    jwt.verify(token, JWT_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Please re-login", err });
      } else {
        next();
      }
    });
  }
};

module.exports = { Authenticate, JWT_KEY };

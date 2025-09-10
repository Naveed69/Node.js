const jwt = require("jsonwebtoken");
const JWT_KEY = "naveeddesai";

const Authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Please login" });
  } else {
    jwt.verify(token, JWT_KEY, (err, decodedKey) => {
      if (err) {
        res.status(403).json({ message: "Please re-login", err });
      } else {
        next();
      }
    });
  }
};

module.exports = { Authenticate, JWT_KEY };

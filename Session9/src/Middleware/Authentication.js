const Authenticate = (req, res, next) => {
  const pass = req.headers.authorization;
  if (pass === process.env.Auth_PASS_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Not authorize user" });
  }
};

module.exports = Authenticate;

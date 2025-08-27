const Authorize = (req, res, next) => {
  if (req.headers.authorization === process.env.Auth_SECRET_KEY) {
    next();
  } else {
    res.status(500).json({ message: "UnAuthoruze user" });
  }
};

module.exports = { Authorize };

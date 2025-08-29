const Authorize = (req, res, next) => {
  if (process.env.Auth_SECRET_KEY === req.headers.authorization) {
    next();
  } else {
    res.status(403).json({ message: "Unauthorised Access" });
  }
};

module.exports = Authorize;

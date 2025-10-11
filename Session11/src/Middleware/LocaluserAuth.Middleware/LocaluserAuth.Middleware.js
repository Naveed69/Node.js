const LocaluserAuth = (req, res, next) => {
  const pass = req.headers.authorization;
  if (pass === process.env.Secret_Pass) {
    next();
  } else {
    res.status(400).json({ message: "Not Authorize to access" });
  }
};

module.exports = LocaluserAuth;

const Authenticate = (req, res, next) => {
  const pass = req.headers.authorization;
  if (pass === process.env.Secrate_Key) {
    next();
  } else {
    res.status(401).json({ message: "Please enter valida login details" });
  }
};

module.exports = Authenticate;

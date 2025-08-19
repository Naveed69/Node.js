function authorize(req, res, next) {
  const header = req.headers;
  const auth = header.authorization;
  if (auth === process.env.AUTH) {
    next();
  } else {
    res.status(401).send({ message: "Please Login" });
  }
}

module.exports = { authorize };

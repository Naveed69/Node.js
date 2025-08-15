const secretPAssword = "Naveed";
function authorize(req, res, next) {
  const header = req.headers;
  const auth = header.authorization;
  if (auth === secretPAssword) {
    next();
  } else {
    res.status(401).send({ message: "Please Login" });
  }
}

module.exports = { authorize };

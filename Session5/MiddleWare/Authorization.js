function Authorization(req, res, next) {
  const pass = req.headers;

  if (process.env.AUTH === pass.authorization) next();
  else res.status(203).send("Not Authorized user");
}
module.exports = Authorization;

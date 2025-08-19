function HomeCotroller(req, res) {
  res.send("Welcome to my site");
}

function ContactCotroller(req, res) {
  res.send("Mob:9008888569 mail:naveed@gmail.com");
}

module.exports = { HomeCotroller, ContactCotroller };

function homeResponse(req, res) {
  res.send("fitness");
}

function contactDetails(req, res) {
  res.send("Mobile:9008888569 Mail:naveed@gmail.com");
}

module.exports = { homeResponse, contactDetails };

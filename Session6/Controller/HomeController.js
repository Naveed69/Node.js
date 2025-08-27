const Home = (req, res) => {
  res.send("Hello node started homePage");
};

const Contact = (req, res) => {
  res.send("mob:9008888569 mail:naveed@gmail.com");
};

const Fitness = (req, res) => {
  const fitness = ["yoga", "gym", "aerobics", "swimming"];
  res.send(fitness);
};

const Service = (req, res) => {
  res.send("Hello node services started");
};

module.exports = { Service, Fitness, Contact, Home };

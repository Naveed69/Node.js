const express = require("express");

const Home = (req, res) => {
  res.send("Hello, Node.js! home controller");
};

const HomeContact = (req, res) => {
  res.send("Hello, Node.js!home controller contact number 9008888569");
};

const HomeFitness = (req, res) => {
  res.send("Hello, Node.js! home controller fitness frequently go to gym");
};

module.exports = { Home, HomeContact, HomeFitness };

const express = require("express");
const { allCurrency } = require("./Controllers/AvailableCurrentcyController");
const {
  ConvertCurrency,
} = require("./Controllers/CurrencyConverterController");
const server = express();
// server.use(express.json());
const port = 3000;

//Routes
server.get("/exchange/currencies", allCurrency);

server.get("/exchange/convert", ConvertCurrency);
server.listen(port, () => {
  console.log("server started at", port);
});

const axios = require("axios");
async function allCurrency(req, res) {
  const url = "https://open.er-api.com/v6/latest";
  try {
    const response = await axios.get(url);
    const currency = await axios.get(url);
    const availableCurrency = currency.data.rates;
    const currencies = { data: Object.keys(availableCurrency) };
    res.status(200).json(currencies);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "The service is currently down, please check again later",
    });
  }
}

module.exports = { allCurrency };

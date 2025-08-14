const axios = require("axios");
const url = "https://open.er-api.com/v6/latest";
async function ConvertCurrency(req, res) {
  const query = req.query;

  if (query.value < 0)
    res.status(400).json({ message: "Incomplete or Incorrect data passed" });
  if (query.currency.length !== 3 || query.to_currency.length !== 3)
    res.status(404).json({ message: "Cannot find given currency code" });
  try {
    const APIResponse = await axios.get(`${url}/${query.currency}`);
    const convertedCurrency = query.value * APIResponse.data.rates.USD;
    res.status(200).json({ result: convertedCurrency });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "The service is currently down, please check again later",
    });
  }
}
module.exports = { ConvertCurrency };

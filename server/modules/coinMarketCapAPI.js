const axios = require("axios");
import cors from "cors";

require("dotenv").config({ path: "./.env" });

const fetch = () => {
  return axios({
    method: "get",
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    responseType: "JSON",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKETCAP_KEY,
    },
    qs: {
      start: "1",
      limit: "5000",
      convert: "USD",
    },
  });
};

module.exports = { fetch };

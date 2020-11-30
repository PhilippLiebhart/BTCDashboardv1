import { useEffect, useState } from "react";
import Axios from "axios";

const useCoinmarketCap = () => {
  const [coinmarketData, setCoinMarketData] = useState({});

  const requestOptions = {
    method: "GET",
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "5000",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": `${process.env.REACT_APP_COINMARKETCAP_KEY}`,
    },
    json: true,
    gzip: true,
  };

  useEffect(() => {
    Axios.get(requestOptions.url, requestOptions)
      .then((res) => {
        console.log("COIN MARKET RES", res);
        setCoinMarketData({ ...res.data });
      })
      .catch((err) => console.error("COIN MARKET AXIOS ERROR!", err));
  }, []);

  return [coinmarketData];
};

export default useCoinmarketCap;

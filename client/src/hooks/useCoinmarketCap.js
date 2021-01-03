import { useEffect, useState } from "react";
import Axios from "axios";

const useCoinmarketCap = () => {
  const [coinmarketData, setCoinMarketData] = useState({});

  const fetchCoinmarketData = () => {
    Axios.get(`https://btcdashserver.herokuapp.com/coinMarketCap`)
      .then((res) => {
        console.log("useCoinmarketCap RESULT:", res);
        setCoinMarketData(res.data);
      })
      .catch((err) => console.error("useCoinmarketCap AXIOS ERROR!", err));
  };

  useEffect(() => {
    fetchCoinmarketData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [coinmarketData];
};

export default useCoinmarketCap;

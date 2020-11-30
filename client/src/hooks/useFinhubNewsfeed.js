import { useEffect, useState } from "react";
import Axios from "axios";

// TODO wie die url da rein?
const config = {};

const useFinhubNewsfeed = () => {
  const [finhubNews, setFinhubNews] = useState([]);

  const fetchNews = () => {
    Axios.get(
      `https://finnhub.io/api/v1/news?category=crypto&minId=10&token=${process.env.REACT_APP_FINHUB_API_TOKEN}`
    )
      .then((res) => {
        console.log("FINHUB NEWS RESULT:", res);
        setFinhubNews(res.data);
      })
      .catch((err) => console.error("FinHUB AXIOS ERROR!", err));

    // and schedule a repeat
    setTimeout(fetchNews, 15000);
  };

  useEffect(() => {
    fetchNews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [finhubNews];
};

export default useFinhubNewsfeed;

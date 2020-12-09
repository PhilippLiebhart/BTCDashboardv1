import { useEffect, useState } from "react";
import Axios from "axios";

const NEWS_URL = `https://finnhub.io/api/v1/news?category=crypto&minId=10&token=${process.env.REACT_APP_FINHUB_API_TOKEN}`;

const useFinhubNewsfeed = () => {
  const [finhubNews, setFinhubNews] = useState([]);

  const fetchNews = () => {
    Axios.get(NEWS_URL)
      .then((res) => {
        console.log("FINHUB NEWS RESULT:", res);
        setFinhubNews(res.data);
      })
      .catch((err) => console.error("FinHUB AXIOS ERROR!", err));

    setTimeout(fetchNews, 100000);
  };

  useEffect(() => {
    fetchNews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [finhubNews];
};

export default useFinhubNewsfeed;

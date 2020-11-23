import { useEffect, useState } from "react";
import Axios from "axios";

const useFinhubNewsfeed = () => {
  const [FinhubNews, setFinhubNews] = useState([]);

  console.log("ENVVV", process.env);

  useEffect(() => {
    Axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${process.env.REACT_APP_FINHUB_API_TOKEN}`
    ).then((res) => setFinhubNews(res.data));
  }, []);

  return [FinhubNews];
};

export default useFinhubNewsfeed;

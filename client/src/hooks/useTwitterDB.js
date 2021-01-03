import { useEffect, useState } from "react";
import Axios from "axios";

const useTwitterDB = () => {
  const [tweets, setTweets] = useState();

  const fetchTweets = () => {
    Axios.get(`https://btcdashserver.herokuapp.com/all-tweets`)
      .then((res) => {
        console.log("TWEETS AXIOS RESULT:", res);
        setTweets(res.data.reverse());
      })
      .catch((err) => console.error("FinHUB AXIOS ERROR!", err));

    setTimeout(fetchTweets, 15000);
  };

  useEffect(() => {
    fetchTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [tweets];
};

export default useTwitterDB;

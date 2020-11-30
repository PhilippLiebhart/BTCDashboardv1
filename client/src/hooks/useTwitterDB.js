import { useEffect, useState } from "react";
import Axios from "axios";

const useTwitterDB = () => {
  const [tweets, setTweets] = useState();

  useEffect(() => {
    setInterval(() => {
      Axios.get(`http://localhost:4000/all-tweets`)
        .then((res) => {
          console.log("TWEETS AXIOS RESULT:", res);
          setTweets(res.data.reverse());
        })
        .catch((err) => console.error("FinHUB AXIOS ERROR!", err));
    }, 15000);
  }, []);

  return [tweets];
};

export default useTwitterDB;

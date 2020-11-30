import { useEffect, useState } from "react";
import Axios from "axios";

const useFearAndGreedIndex = () => {
  const [fearAndGreedIndex, setFearAndGreedIndex] = useState({});

  const fetchFearAndGreed = () => {
    Axios.get(`https://api.alternative.me/fng/`)
      .then((res) => {
        console.log("RESULT", res);
        setFearAndGreedIndex({ ...res.data.data[0] });
      })
      .catch((err) => console.error("Greed Index API AXIOS ERROR!", err));
    setTimeout(fetchFearAndGreed, 100000);
  };

  useEffect(() => {
    fetchFearAndGreed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fearAndGreedIndex];
};

export default useFearAndGreedIndex;

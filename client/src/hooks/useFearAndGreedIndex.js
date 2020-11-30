import { useEffect, useState } from "react";
import Axios from "axios";

// TODO wie die url da rein?
const config = {};

const useFearAndGreedIndex = () => {
  const [fearAndGreedIndex, setFearAndGreedIndex] = useState({});

  useEffect(() => {
    Axios.get(`https://api.alternative.me/fng/`)
      .then((res) => {
        setFearAndGreedIndex({ ...res.data.data[0] });
      })
      .catch((err) => console.error("Greed Index API AXIOS ERROR!", err));
  }, []);

  return [fearAndGreedIndex];
};

export default useFearAndGreedIndex;

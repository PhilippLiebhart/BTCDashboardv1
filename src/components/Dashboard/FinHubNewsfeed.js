import PropTypes from "prop-types";
import { useEffect } from "react";

import useFinhubNewsfeed from "../../hooks/useFinhubNewsfeed";

function Finhubnewsfeed(props) {
  const [FinhubNews] = useFinhubNewsfeed();

  console.log("GET NEWS FEEEEEED:", FinhubNews);

  return (
    <>
      <h1>
        {FinhubNews.length < 1 ? <p>I AM LOADING NEWS</p> : <p>NEWS LOADED</p>}
      </h1>
    </>
  );
}

Finhubnewsfeed.propTypes = {};

export default Finhubnewsfeed;

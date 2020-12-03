import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFearAndGreedIndex from "../../hooks/useFearAndGreedIndex";

const FearAndGreedIndex = (props) => {
  const [fearAndGreedIndex] = useFearAndGreedIndex();

  console.log("FEAR AND GREED:", fearAndGreedIndex.timestamp);
  const time = new Date(fearAndGreedIndex.timestamp * 1000).toLocaleDateString(
    "en-US"
  );

  const greedCard = (
    <div className="grid">
      {" "}
      <h6 className="text-primary m-0 p-0">Fear and Greed Index:</h6>
      <h4 className="text-white m-0 p-0">{fearAndGreedIndex.value} / 100</h4>
      <h6 className="text-primary m-0 p-0">
        {fearAndGreedIndex.value_classification}
      </h6>
      <small>{time}</small>
    </div>
  );

  return (
    <FearAndGreedWrapper>
      {fearAndGreedIndex ? greedCard : <Spinner />}
    </FearAndGreedWrapper>
  );
};

const FearAndGreedWrapper = styled.div`
  padding: 16px;
  margin: 10px;

  border-radius: 10px;
  text-align: center;

  /* background-color: var(--dark); */
  color: var(--primary);

  /* .grid {
    display: grid;
    grid-gap: auto;
    align-items: center;
    height: 100%;
  } */
`;

FearAndGreedIndex.propTypes = {};

export default FearAndGreedIndex;

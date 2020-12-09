import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFearAndGreedIndex from "../../hooks/useFearAndGreedIndex";

const FearAndGreedIndex = (props) => {
  const [fearAndGreedIndex] = useFearAndGreedIndex();

  const time = new Date(fearAndGreedIndex.timestamp * 1000).toLocaleDateString(
    "en-US"
  );

  const greedCard = (
    <div className="grid">
      <h6 className="secondary pm-0">
        {fearAndGreedIndex.value_classification}
      </h6>
      <h4 className="primary pm-0">{fearAndGreedIndex.value} / 100</h4>
      <small className="secondary">{time}</small>
    </div>
  );

  return (
    <FearAndGreedWrapper>
      {fearAndGreedIndex ? greedCard : <Spinner />}
    </FearAndGreedWrapper>
  );
};

const FearAndGreedWrapper = styled.div`
  height: 60%;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  color: var(--primary);

  .grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default FearAndGreedIndex;

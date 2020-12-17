import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFearAndGreedIndex from "../../hooks/useFearAndGreedIndex";

const FearAndGreedIndex = () => {
  const [fearAndGreedIndex] = useFearAndGreedIndex();

  const greedCard = (
    <div className="grid">
      <h4 className="primary pm-0">{fearAndGreedIndex.value} / 100</h4>
      <h6 className="secondary pm-0">
        {fearAndGreedIndex.value_classification}
      </h6>
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
  border-radius: 10px;
  text-align: center;
  color: var(--primary);

  h6 {
    font-size: 0.8rem;
  }

  .grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default FearAndGreedIndex;

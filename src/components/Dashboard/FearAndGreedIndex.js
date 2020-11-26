import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFearAndGreedIndex from "../../hooks/useFearAndGreedIndex";

function FearAndGreedIndex(props) {
  const [fearAndGreedIndex] = useFearAndGreedIndex();

  console.log("FEAR AND GREED:", fearAndGreedIndex);

  return (
    <FearAndGreedWrapper>
      <div className="grid">
        {" "}
        <h6 className="text-primary m-0 p-0">Fear and Greed Index:</h6>
        <h4 className="text-white m-0 p-0">{fearAndGreedIndex.value} / 100</h4>
        <h6 className="text-primary m-0 p-0">
          {fearAndGreedIndex.value_classification}
        </h6>
      </div>
    </FearAndGreedWrapper>
  );
}

const FearAndGreedWrapper = styled.div`
  padding: 16px;
  margin: 10px;
  height: 136px;

  border-radius: 10px;
  text-align: center;

  background-color: var(--dark);
  color: var(--primary);

  .grid {
    display: grid;
    grid-gap: auto;
    align-items: center;
    height: 100%;
  }
`;

FearAndGreedIndex.propTypes = {};

export default FearAndGreedIndex;

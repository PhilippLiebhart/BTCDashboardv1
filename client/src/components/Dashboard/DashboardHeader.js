import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import chartSample from "../../assets/img/chart-sample.svg";
import averageSymbol from "../../assets/img/symbol-average.svg";
import Spinner from "../UI/Spinner";

const Dashboardheader = (props) => {
  const tickDirectionRef = useRef();
  tickDirectionRef.current = props.averagePrice;

  const [lastAveragePrice, setLastAveragePrice] = useState();
  const [averagePriceDirection, setAveragePriceDirection] = useState();

  useEffect(() => {
    setLastAveragePrice(props.averagePrice);

    if (lastAveragePrice < tickDirectionRef.current) {
      setAveragePriceDirection("up");
    } else if (lastAveragePrice > tickDirectionRef.current) {
      setAveragePriceDirection("down");
    }
  }, [tickDirectionRef]);

  return (
    <DashboardheaderWrapper>
      <AveragePrice className="header__item" direction={averagePriceDirection}>
        <img src={averageSymbol} alt="" />
        <h1 className="">
          {props.averagePrice !== "NaN" ? props.averagePrice : <Spinner />}
        </h1>
      </AveragePrice>

      <div className="primary header__item">
        <h3>24h Change:</h3>
        <h3>+xxx</h3>
      </div>
    </DashboardheaderWrapper>
  );
};

export default Dashboardheader;

const AveragePrice = styled.div`
  display: flex;
  color: ${(props) =>
    props.direction === "up" ? "var(--success)" : "var(--danger)"} !important;
`;

const DashboardheaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100px;

  @media (max-width: 576px) {
    height: auto;
  }

  h1 {
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    text-align: center;
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }

  .header__item {
    margin: 15px;

    img {
      display: inline;
      margin-right: 12px;
      vertical-align: bottom;
      padding-top: 2px;
      width: 25px;
    }
    @media (max-width: 576px) {
      margin: 15px 0 0 0;
      img {
        width: 15px;
      }
    }
  }
`;

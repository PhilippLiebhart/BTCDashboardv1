import PropTypes from "prop-types";

import { useEffect, useState, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import averageSymbol from "../../assets/img/symbol-average.svg";
import { DashboardContext } from "../../context/DashboardContext";
import Spinner from "../UI/Spinner";

const Dashboardheader = ({ averagePrice, layoutStatus }) => {
  const coinMarketData = useContext(DashboardContext);

  const tickDirectionRef = useRef();
  tickDirectionRef.current = averagePrice;

  const [lastAveragePrice, setLastAveragePrice] = useState();
  const [averagePriceDirection, setAveragePriceDirection] = useState();

  useEffect(() => {
    setLastAveragePrice(averagePrice);

    if (lastAveragePrice < tickDirectionRef.current) {
      setAveragePriceDirection("up");
    } else if (lastAveragePrice > tickDirectionRef.current) {
      setAveragePriceDirection("down");
    }
  }, [averagePrice, lastAveragePrice]);

  return (
    <DashboardheaderWrapper>
      <AveragePrice
        className="header__item"
        direction={averagePriceDirection}
        isMobile={layoutStatus === "xs"}
      >
        <img src={averageSymbol} alt="" />
        <h1>{averagePrice !== "NaN" ? averagePrice : <Spinner />} %</h1>
      </AveragePrice>
      <div className="header__item">
        <Percent24h direction={coinMarketData?.direction}>
          <h3>
            24h Change: {coinMarketData?.percent24h > 0 ? "+ " : " "}
            {coinMarketData?.percent24h} %
          </h3>
        </Percent24h>
      </div>
      <div className="header__item">
        <Percent24h>
          <WinnerLoser
            direction={
              coinMarketData?.winner24h?.quote?.USD?.percent_change_24h > 0
                ? "up"
                : "down"
            }
          >
            24h Winner: {coinMarketData?.winner24h?.name} |{" "}
            {coinMarketData?.winner24h?.quote?.USD?.percent_change_24h.toFixed(
              2
            )}{" "}
            %
          </WinnerLoser>

          <WinnerLoser
            direction={
              coinMarketData?.loser24h?.quote?.USD?.percent_change_24h > 0
                ? "up"
                : "down"
            }
          >
            24h Loser: {coinMarketData?.loser24h?.name} |{" "}
            {coinMarketData?.loser24h?.quote?.USD?.percent_change_24h.toFixed(
              2
            )}{" "}
            %
          </WinnerLoser>
        </Percent24h>
      </div>
    </DashboardheaderWrapper>
  );
};

export default Dashboardheader;

const AveragePrice = styled.div`
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  ${(props) =>
    props.direction === "up"
      ? css`
          transform: rotate(-1deg);
        `
      : css`
          transform: rotate(1deg);
        `};

  color: ${(props) =>
    props.direction === "up" ? "var(--success)" : "var(--danger)"};
  width: ${(props) => (props.isMobile ? "350px" : "240px")};

  h1 {
    font-size: ${(props) => (props.isMobile ? "2.8rem" : "2.5rem")};
  }
`;

const DashboardheaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  /* height: 100px; */
  @media (max-width: 1022px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    justify-items: center;
    text-align: center;
  }

  h1 {
    text-shadow: -1px -1px 30px rgba(0, 0, 0, 0.2);
    margin: 0;
    margin-bottom: 10px;
    font-size: 2.3rem;
    /* @media (max-width: 700px) {
      font-size: 1.2rem;
    } */
    display: inline;
  }

 
  }

  .header__item {
    height: 100%;
    width: 300px;
    justify-self: center;
   


    img {
      display: inline;
      margin-right: 12px;
      /* 
      padding-top: 2px; */
      width: 25px;
    }
    @media (max-width: 700px) {
      /* margin: 15px 0 0 0; */
      img {
        width: 15px;
      }
    }

    h3 {

    font-size: 1rem;

    text-shadow: -1px -1px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 830px) {
      font-size: 0.8rem;
    }
  }
`;

const Percent24h = styled.div`
  color: ${(props) =>
    props.direction === "up" ? "var(--success)" : "var(--danger)"};
`;
const WinnerLoser = styled.h3`
  color: ${(props) =>
    props.direction === "up" ? "var(--success)" : "var(--danger)"};
  margin: 2px;
`;

Dashboardheader.propTypes = {
  averagePrice: PropTypes.string,
};

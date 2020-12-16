import PropTypes from "prop-types";

import { useEffect, useState, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import averageSymbol from "../../assets/img/symbol-average.svg";
import { DashboardContext } from "../../context/DashboardContext";
import Spinner from "../UI/Spinner";

const Dashboardheader = ({ averagePrice }) => {
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
  }, [averagePrice]);

  return (
    <DashboardheaderWrapper>
      <AveragePrice className="header__item" direction={averagePriceDirection}>
        <img src={averageSymbol} alt="" />
        <h1 className="">
          {averagePrice !== "NaN" ? averagePrice : <Spinner />}
        </h1>
      </AveragePrice>
      <div className="header__item">
        <Percent24h direction={coinMarketData?.direction}>
          <h3>
            24h Change: {coinMarketData?.percent24h > 0 ? "+ " : "- "}
            {coinMarketData?.percent24h}
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
            )}
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
            )}
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
  width: 240px;
  @media (max-width: 576px) {
    width: 130px;
    h1 {
      text-align: center;
    }
  }
`;

const breakpoint = "var(--breakpoint-lg)";

const DashboardheaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100px;

  @media (max-width: 576px) {
    height: auto;
  }

  h1 {
    text-shadow: -1px -1px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    text-align: center;
    text-shadow: -1px -1px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 830px) {
      font-size: 0.8rem;
    }
  }

  .header__item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: inline;
      margin-right: 12px;
      padding-top: 2px;
      width: 25px;
    }
    @media (max-width: 700px) {
      margin: 15px 0 0 0;
      img {
        width: 15px;
      }
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

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import chartSample from "../../assets/img/chart-sample.svg";
import averageSymbol from "../../assets/img/symbol-average.svg";
import Spinner from "../UI/Spinner";

const Dashboardheader = (props) => {
  const tickDirectionRef = useRef();
  tickDirectionRef.current = props.averagePrice;

  const [lastPrice, setLastPrice] = useState();
  const [averagePriceDirection, setAveragePriceDirection] = useState();

  useEffect(() => {
    setLastPrice(props.averagePrice);

    if (lastPrice < tickDirectionRef.current) {
      setAveragePriceDirection("up");
    } else if (lastPrice > tickDirectionRef.current) {
      setAveragePriceDirection("down");
    }
  }, [props.averagePrice]);

  return (
    <DashboardheaderWrapper>
      <AveragePrice className="header__item" direction={averagePriceDirection}>
        <img
          src={averageSymbol}
          style={{
            display: "inline",
            marginRight: "12px",
            verticalAlign: "bottom",
            paddingTop: "2px",
          }}
          width="25px"
          alt=""
        />
        <h1 className="">
          {props.averagePrice !== "NaN" ? props.averagePrice : <Spinner />}
        </h1>
      </AveragePrice>

      <div className="primary header__item">
        <h3>24h Change:</h3>
        <h3>+0.41%</h3>
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

  h3 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .header__item {
    margin: 15px;
  }
  .header--24h {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

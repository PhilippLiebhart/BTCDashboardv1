import PropTypes from "prop-types";
import styled from "styled-components";

import chartSample from "../../assets/img/chart-sample.svg";
//import Websockettest from "../../hooks/websockettest";

const TickerCard = ({ name, last, vol, high, low, status }) => {
  return (
    <>
      <TickerCardWrapper>
        <div className="row">
          <div className="col-6">
            <ExchangeName>
              {name} <small>Status: {status}</small>
            </ExchangeName>
          </div>
          <div className="col-6">
            {" "}
            <img
              src={chartSample}
              alt=""
              height="25px"
              width="100%"
              style={{ padding: 0 }}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-7">
            <Price>{last}</Price>
            <Percent className="text-warning">+000 % </Percent>
          </div>
          <div className="col-5">
            <Volume>Vol {vol}</Volume>
            <Volume>High {high}</Volume>
            <Volume>Low {low}</Volume>
          </div>
        </div>
      </TickerCardWrapper>
    </>
  );
};

TickerCard.propTypes = {};

export default TickerCard;

const TickerCardWrapper = styled.div`
  width: 268px;
  height: 136px;
  padding: 16px;
  margin: 10px;
  border-radius: 10px;
  text-align: left;

  background-color: var(--dark);
  color: var(--primary);

  hr {
    height: 1px;
    border-color: var(--secondary);
    width: 100%;
    padding: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

const ExchangeName = styled.h1`
  display: inline;
  font-size: 0.8rem;
`;

const Price = styled.h3``;
const Percent = styled.h6`
  font-size: 0.5rem;
`;

const Volume = styled.h4`
  font-size: 0.6rem;
`;

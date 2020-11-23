import PropTypes from "prop-types";
import styled from "styled-components";

import chartSample from "../../assets/img/chart-sample.svg";

const TickerCard = () => {
  return (
    <>
      <TickerCardWrapper>
        <div className="row">
          <div className="col-6">
            <ExchangeName>BINANCE</ExchangeName>
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
            <Price>21453 $</Price>
            <Percent>+50 % </Percent>
          </div>
          <div className="col-5">
            <Volume>Volume 2.3mio</Volume>
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
  font-size: 0.8rem;
`;

const Price = styled.h3``;
const Percent = styled.h6`
  font-size: 0.5rem;
`;

const Volume = styled.h4`
  font-size: 0.6rem;
`;
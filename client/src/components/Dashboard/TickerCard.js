import PropTypes from "prop-types";

import styled from "styled-components";
import Spinner from "../UI/Spinner";

const TickerCard = ({ name, last, vol, high, low, status }) => {
  const tickerCard = (
    <TickerCardWrapper>
      <div className="row">
        <div className="col-exchangeName">
          <ExchangeName>{name}</ExchangeName>
        </div>
        <div>+15%</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-price">
          <Price className="price">{last} $</Price>
        </div>
        <div className="col-data">
          <Volume>Vol {vol}</Volume>
          <Volume>High {high}</Volume>
          <Volume>Low {low}</Volume>
        </div>
      </div>
    </TickerCardWrapper>
  );

  return <>{last && vol && high && low ? tickerCard : <Spinner />}</>;
};

export default TickerCard;

const TickerCardWrapper = styled.div`
  padding: 16px 16px 16px 16px;
  @media (max-width: 576px) {
    padding: 10px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-content: center;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .col-exchangeName {
    text-align: left;
  }

  .col-price {
  }

  .col-right {
    text-align: left !important;
    @media (max-width: 576px) {
      text-align: center !important;
    }
  }

  .col-data {
    width: 100%;
  }

  hr {
    height: 1px;
    border-color: var(--secondary);
    width: 100% !important;
    padding: 0;
    margin-top: 12px;
    margin-bottom: 12px;
    border-bottom: none;
    border-left: none;
    border-right: none;
    @media (max-width: 576px) {
      margin: 5px auto;
    }
  }
`;

const ExchangeName = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 1.2rem !important;
  }
`;

const Volume = styled.p`
  font-size: 0.6rem;
  line-height: 0;
  font-weight: 500;
  @media (max-width: 576px) {
    line-height: 2px;
  }
`;
// const Status = styled.span``;

TickerCard.propTypes = {
  name: PropTypes.string,
  last: PropTypes.number,
  vol: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  status: PropTypes.string,
};

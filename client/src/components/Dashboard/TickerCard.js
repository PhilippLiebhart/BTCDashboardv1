import PropTypes from "prop-types";
import styled from "styled-components";

const TickerCard = ({ name, last, vol, high, low, status }) => {
  return (
    <>
      <TickerCardWrapper>
        <div className="row">
          <div className="">
            <ExchangeName className="font-weight-bold">{name}</ExchangeName>
          </div>
          <div className="">
            <Status
              style={{
                color: status,
                backgroundColor: status,
                borderRadius: "50%",
                width: "150px",
                height: "150px",
              }}
            >
              o
            </Status>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-price">
            <Price className="font-weight-bolder">{last}</Price>
          </div>
          <div className="">
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
  height: 136px;
  padding: 32px 16px 16px 16px;

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: auto;
    justify-items: left;
    align-items: center;
    align-content: center;
    text-align: left !important;
  }
  .col-price {
    text-align: center;
    width: 100%;
  }

  .col-right {
    text-align: left !important;
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
  }
`;

const ExchangeName = styled.h1`
  color: var(--primary);
  display: inline;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Volume = styled.p`
  font-size: 0.7rem;
  line-height: 0;
`;
const Status = styled.span``;

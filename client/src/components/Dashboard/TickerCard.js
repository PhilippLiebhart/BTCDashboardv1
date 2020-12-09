import PropTypes from "prop-types";
import styled from "styled-components";

const TickerCard = ({ name, last, vol, high, low, status }) => {
  return (
    <>
      <TickerCardWrapper>
        <div className="row align-items-center">
          <div className="col-7">
            <ExchangeName>{name}</ExchangeName>
          </div>
          <div className="col-5">
            <Status
              style={{
                color: status,
                backgroundColor: status,
                borderRadius: "50%",
                width: "150px",
                height: "150px",
              }}
            >
              O
            </Status>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-6 my-auto">
            <Price>{last}</Price>
            {/* <Percent className="text-warning">+000 % </Percent> */}
          </div>
          <div className="col-6 my-auto">
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
  padding: 26px 16px 16px 16px;
  border-radius: 10px;
  text-align: left;
  align-items: center;

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
  color: var(--primary);
  display: inline;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Volume = styled.h4`
  font-size: 0.7rem;
  line-height: 0.8rem;
`;
const Status = styled.span``;

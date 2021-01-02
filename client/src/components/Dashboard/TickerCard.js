import PropTypes from "prop-types";

import styled from "styled-components";
import Spinner from "../UI/Spinner";

import PHEMEXLogo from "../../assets/exchangeLogos/phemex.svg";
import BYBITLogo from "../../assets/exchangeLogos/bybit.png";
import BITMEXLogo from "../../assets/exchangeLogos/bitmex.svg";
import BINANCELogo from "../../assets/exchangeLogos/binance.svg";

const LOGOS = {
  PHEMEX: PHEMEXLogo,
  BYBIT: BYBITLogo,
  BITMEX: BITMEXLogo,
  BINANCE: BINANCELogo,
};

const TickerCard = ({ name, last, vol, high, low, status, layoutStatus }) => {
  const tickerCard = (
    <TickerCardWrapper>
      <div className="row">
        <div className="col-exchangeName">
          {layoutStatus === "xs" ? (
            <img src={LOGOS[name]} alt="" width="20px" />
          ) : (
            <ExchangeName isMobile={layoutStatus === "xs"}>
              {name}{" "}
            </ExchangeName>
          )}
        </div>
        <div className="col-price">
          <Price className="price" isMobile={layoutStatus === "xs"}>
            {last}
          </Price>
        </div>
        <div className="col-currency">
          <Price className="price" isMobile={layoutStatus === "xs"}>
            {" "}
            $
          </Price>
        </div>
      </div>
      <Hr isMobile={layoutStatus === "xs"} />

      <AdditionalData isMobile={layoutStatus === "xs"}>
        <Volume>Vol {vol}</Volume>
        <Volume>High {high}</Volume>
        <Volume>Low {low}</Volume>
      </AdditionalData>
    </TickerCardWrapper>
  );

  return <>{last && vol && high && low ? tickerCard : <Spinner />}</>;
};

export default TickerCard;

const TickerCardWrapper = styled.div`
  padding: 16px 16px 16px 16px;
  @media (max-width: 576px) {
    padding: 13px 10px 10px 10px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
  }

  .col-exchangeName {
    text-align: center;

    img {
      padding: 0;
      margin: 0;
    }
  }
  .col-price {
    text-align: center;
  }
  .col-currency {
    text-align: center;
    width: 15px;
    right: 10px;
    position: relative;
    justify-self: end;
  }
`;

const Hr = styled.hr`
  display: ${(props) => (props.isMobile ? "none" : "flex")};

  height: 1px;
  border-color: var(--secondary);
  width: 100%;
  padding: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  @media (max-width: 576px) {
    margin: 5px auto;
  }
`;
const ExchangeName = styled.div`
  font-weight: 600;
  font-size: ${(props) => (props.isMobile ? "1rem" : "0.8rem")};
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-size: ${(props) => (props.isMobile ? "1rem" : "1rem")};
`;
const AdditionalData = styled.div`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Volume = styled.span`
  font-size: 0.6rem;
  /* line-height: 0; */
  font-weight: 500;
  @media (max-width: 576px) {
    line-height: 2px;
  }
`;

TickerCard.propTypes = {
  name: PropTypes.string,
  last: PropTypes.number,
  vol: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  status: PropTypes.string,
};

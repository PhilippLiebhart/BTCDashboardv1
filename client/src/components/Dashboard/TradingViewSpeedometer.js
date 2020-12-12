import styled from "styled-components";

import useTradingViewSpeedometer from "../../hooks/useTradingViewSpeedometer";

const TradingViewSpeedometer = () => {
  useTradingViewSpeedometer(
    "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
  );

  return (
    <Wrapper>
      <div class="tradingview-widget-container">
        <div
          class="tradingview-widget-container__widget"
          id="speedometer"
        ></div>
      </div>
    </Wrapper>
  );
};

export default TradingViewSpeedometer;

const Wrapper = styled.div`
  .tradingview-widget-container {
  }
  .tradingview-widget-container__widget {
    width: fit-content;
    margin: 0 auto;
  }
`;

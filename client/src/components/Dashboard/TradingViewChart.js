import PropTypes from "prop-types";

import styled from "styled-components";

import TradingViewWidget, { Themes, BarStyles } from "react-tradingview-widget";

const TradingViewChart = ({ dashboard = false }) => {
  return (
    <TradingViewWrapper scaleHeight={dashboard}>
      <div className="container">
        <TradingViewWidget
          symbol="KRAKEN:XBTUSD"
          interval="15"
          theme={Themes.DARK}
          locale="de"
          autosize
          container_id="tradingview_60576"
          style={BarStyles.HEIKIN_ASHI}
          hide_side_toolbar={false}
        />
      </div>
    </TradingViewWrapper>
  );
};

const TradingViewWrapper = styled.div`
  height: 89%;
  padding: 16px;

  .container {
    height: ${(props) => (props.scaleHeight ? "100%" : "85vh")};
  }
`;

export default TradingViewChart;

TradingViewChart.propTypes = {
  dashboard: PropTypes.bool.isRequired,
};

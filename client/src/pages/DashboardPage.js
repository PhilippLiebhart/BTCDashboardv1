import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { WidthProvider, Responsive } from "react-grid-layout";
import "./Grid-styles/grid-layout-styles.css";
import "./Grid-styles/resizable-styles.css";
import "./Grid-styles/draggable-item-styles.css";

import { DashboardContext } from "../context/DashboardContext";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TwitterWidget from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsWidget from "../components/Dashboard/FinHubNewsWidget";
import TickerCard from "../components/Dashboard/TickerCard";
import CoinMarketWidget from "../components/Dashboard/CoinMarketWidget";
import TradingViewChart from "../components/Dashboard/TradingViewChart";
import TradingViewSpeedometer from "../components/Dashboard/TradingViewSpeedometer";
import DisplaySettingsMenu from "../components/Dashboard/DisplaySettingsMenu";

import usePhemexTicker from "../hooks/Ticker/usePhemexTicker";
import useBybitTicker from "../hooks/Ticker/useBybitTicker";
import useBinanceTicker from "../hooks/Ticker/useBinanceTicker";
import useBitmexTicker from "../hooks/Ticker/useBitmexTicker";
import useHuobiTicker from "../hooks/Ticker/useHuobiTicker";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layoutLG = [
  { i: "bitmexTicker", x: 0, y: 0, w: 3, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "binanceTicker", x: 3, y: 0, w: 3, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "phemexTicker", x: 6, y: 0, w: 3, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "bybitTicker", x: 9, y: 0, w: 3, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "feargreed", x: 12, y: 0, w: 2, h: 1, minH: 1, maxH: 1, minW: 2 },
  { i: "NewsFeed", x: 0, y: 0, w: 6, h: 5, minH: 1, minW: 3 },
  { i: "twitter", x: 6, y: 0, w: 4, h: 5, minH: 1, minW: 2 },
  { i: "coinMarket", x: 10, y: 0, w: 4, h: 5, minH: 2, minW: 4, maxH: 5 },
  { i: "tradingView", x: 0, y: 10, w: 11, h: 8, minH: 4, minW: 4 },
  {
    i: "tradingViewSpeedometer",
    x: 11,
    y: 2,
    w: 3,
    h: 3,
    minH: 3,
    maxH: 3,
    maxW: 3,
    minW: 3,
  },
];

const layoutMD = [
  { i: "bitmexTicker", x: 0, y: 0, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "binanceTicker", x: 2, y: 0, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "phemexTicker", x: 4, y: 0, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "bybitTicker", x: 6, y: 0, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1 },
  { i: "feargreed", x: 12, y: 0, w: 2, h: 1, minH: 1, maxH: 1, minW: 2 },
  { i: "NewsFeed", x: 0, y: 0, w: 4, h: 3, minH: 1, minW: 3 },
  { i: "twitter", x: 0, y: 0, w: 4, h: 3, minH: 1, minW: 2 },
  { i: "coinMarket", x: 10, y: 3, w: 2, h: 3, minH: 2, minW: 2, maxH: 3 },
  { i: "tradingView", x: 0, y: 10, w: 4, h: 4, minH: 4, minW: 4 },
  {
    i: "tradingViewSpeedometer",
    x: 11,
    y: 0,
    w: 2,
    h: 3,
    minH: 3,
    maxH: 3,
    maxW: 2,
    minW: 3,
  },
];

const layoutXS = [
  { i: "bitmexTicker", x: 0, y: 0, w: 1, h: 1, maxH: 1 },
  { i: "binanceTicker", x: 1, y: 0, w: 1, h: 1, maxH: 1 },
  { i: "phemexTicker", x: 0, y: 1, w: 1, h: 1, maxH: 1 },
  { i: "bybitTicker", x: 1, y: 1, w: 1, h: 1, maxH: 1 },
  { i: "NewsFeed", x: 1, y: 4, w: 1, h: 6, minH: 1 },
  { i: "twitter", x: 1, y: 3, w: 1, h: 5, minH: 1 },
  { i: "feargreed", x: 0, y: 3, w: 1, h: 2, maxW: 2, maxH: 2, minH: 2 },
  {
    i: "coinMarket",
    x: 0,
    y: 4,
    w: 1,
    h: 9,
    minH: 8,
    maxW: 12,
    minW: 12,
    maxH: 8,
  },
  { i: "tradingView", x: 0, y: 7, w: 12, h: 8, minH: 2 },
  {
    i: "tradingViewSpeedometer",
    x: 0,
    y: 6,
    w: 2,
    h: 9,
    minH: 9,
    maxH: 9,
  },
];

const baseLayout = {
  lg: layoutLG,
  md: layoutMD,
  xs: layoutXS,
};

const baseDisplaySettings = {
  bitmexTicker: false,
  binanceTicker: false,
  phemexTicker: false,
  bybitTicker: false,
  newsfeed: false,
  twitter: false,
  feargreed: false,
  coinMarket: false,
  tradingView: false,
  tradingViewSpeedometer: false,
};

const originalLayouts = getFromLS("layouts", "rgl-8") || baseLayout;
const originalDisplaySettings =
  getFromLS("displaySettings", "settings") || baseDisplaySettings;

const Dashboardpage = () => {
  const dashboardContext = useContext(DashboardContext);
  const { handleLayoutChange } = dashboardContext;

  const [
    phemexTickerLastPrice,
    phemexTickerData,
    connStatus,
  ] = usePhemexTicker();
  const [
    bybitTickerData,
    bybitTickerLastPrice,
    bybitConnStatus,
  ] = useBybitTicker();
  const [binanceTickerData, binanceConnStatus] = useBinanceTicker();
  const [
    bitmexTickerLastPrice,
    bitmexTickerData,
    bitmexConnStatus,
  ] = useBitmexTicker();

  const [huobiTickerData] = useHuobiTicker();

  const [averagePrice, setAveragePrice] = useState();

  const [layoutState, setLayoutState] = useState({
    layouts: originalLayouts,
  });

  const [displaySettings, setDisplaySettings] = useState(
    originalDisplaySettings
  );

  const [layoutSize, setLayoutSize] = useState({ size: 135 });

  useEffect(() => {
    setAveragePrice(
      (
        (bitmexTickerLastPrice?.last +
          binanceTickerData?.last +
          phemexTickerLastPrice?.last / 10000 +
          bybitTickerLastPrice?.last / 10000) /
        4
      ).toFixed(2)
    );
  }, [phemexTickerData, bybitTickerData, binanceTickerData, bitmexTickerData]); // eslint-disable-line react-hooks/exhaustive-deps

  const onLayoutChange = (currentLayout, allLayouts) => {
    setLayoutState({ ...layoutState, layouts: allLayouts });
    saveToLS("layouts", allLayouts, "rgl-8");
  };

  const onResize = (layouts) => {
    setLayoutState({ ...layoutState, layouts: layouts });
  };

  const onBreakpointChange = (breakpoint) => {
    layoutState.currentBreakpoint = breakpoint;
    console.log("CURRENT LAYOUT", breakpoint);
    handleLayoutChange({ breakpoint: breakpoint });
    setLayoutState(layoutState);
  };

  const resetLayout = () => {
    saveToLS("layouts", baseLayout, "rgl-8");
    saveToLS("displaySettings", baseDisplaySettings, "settings");
    window.location.reload();
  };

  const handleDisplaySettings = (itemKey) => {
    setDisplaySettings({
      ...displaySettings,
      [itemKey]: !displaySettings[itemKey],
    });
  };

  useEffect(() => {
    saveToLS("displaySettings", displaySettings, "settings");
  }, [displaySettings]);

  const getRowHeight = () => {
    console.log("$$$$$ HULA $$$$$", dashboardContext.breakpoint);

    if (dashboardContext.breakpoint === "xs") {
      setLayoutSize({ size: 40 });
    } else if (dashboardContext.breakpoint === "md") {
      setLayoutSize({ size: 90 });
    } else if (dashboardContext.breakpoint === "lg") {
      setLayoutSize({ size: 90 });
    }
  };
  useEffect(() => {
    getRowHeight();
    console.log("+++++++++++++", layoutSize);
  }, [layoutState]);

  return (
    <>
      <DashboardWrapper direction={dashboardContext.direction}>
        {/* <button onClick={() => resetLayout()}>Reset Layout</button> */}

        <DisplaySettingsMenu
          saveToLs={() =>
            saveToLS("displaySettings", displaySettings, "settings")
          }
          displaySettings={displaySettings}
          handleDisplaySettings={(itemKey) => handleDisplaySettings(itemKey)}
          reset={() => resetLayout()}
        />
        <DashboardHeader
          averagePrice={averagePrice}
          layoutStatus={dashboardContext.breakpoint}
        />

        <ResponsiveGridLayout
          rowHeight={layoutSize.size}
          //cols={16}
          className="layout"
          onResize={onResize}
          breakpoints={{ lg: 1000, md: 700, xs: 699 }}
          cols={{ lg: 14, md: 6, xs: 2 }}
          //autoSize={true}
          layouts={layoutState.layouts}
          onBreakpointChange={onBreakpointChange}
          onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
          draggableHandle=".MyDragHandleClassName"
          draggableCancel=".MyDragCancel"
          isDraggable={true}
          isResizable={true}
        >
          {/* -- TICKER START ------------------------ */}
          <div
            className={
              "item widget--base " +
              (displaySettings.bitmexTicker ? "hideItem" : "")
            }
            key={"bitmexTicker"}
          >
            <div className="MyDragHandleClassName">
              <TickerCard
                name="BITMEX"
                last={bitmexTickerLastPrice?.last}
                vol={parseFloat(bitmexTickerData?.vol)}
                high={parseFloat(bitmexTickerData?.high?.toFixed(2))}
                low={parseFloat(bitmexTickerData?.low?.toFixed(2))}
                status={bitmexConnStatus}
                layoutStatus={dashboardContext.breakpoint}
              />
            </div>
          </div>

          <div
            className={
              "item widget--base " +
              (displaySettings.binanceTicker ? "hideItem" : "")
            }
            key={"binanceTicker"}
          >
            <div className="MyDragHandleClassName">
              <TickerCard
                name="BINANCE"
                last={binanceTickerData?.last}
                vol={parseFloat(binanceTickerData?.vol?.toFixed(2))}
                high={parseFloat(binanceTickerData?.high?.toFixed(2))}
                low={parseFloat(binanceTickerData?.low?.toFixed(2))}
                status={binanceConnStatus}
                layoutStatus={dashboardContext.breakpoint}
              />
            </div>
          </div>

          <div
            className={
              "item widget--base " +
              (displaySettings.phemexTicker ? "hideItem" : "")
            }
            key={"phemexTicker"}
          >
            <div className="MyDragHandleClassName">
              <TickerCard
                name="PHEMEX"
                last={parseFloat(
                  (phemexTickerLastPrice?.last / 10000).toFixed(2)
                )}
                vol={phemexTickerData?.vol / 10000}
                high={phemexTickerData?.high / 10000}
                low={phemexTickerData?.low / 10000}
                status={connStatus}
                layoutStatus={dashboardContext.breakpoint}
              />
            </div>
          </div>

          <div
            className={
              "item widget--base " +
              (displaySettings.bybitTicker ? "hideItem" : "")
            }
            key={"bybitTicker"}
          >
            <div className="MyDragHandleClassName">
              <TickerCard
                name="BYBIT"
                last={parseFloat(
                  (bybitTickerLastPrice?.last / 10000).toFixed(2)
                )}
                vol={bybitTickerData?.vol / 10000}
                high={bybitTickerData?.high / 10000}
                low={bybitTickerData?.low / 10000}
                status={bybitConnStatus}
                layoutStatus={dashboardContext.breakpoint}
              />
            </div>
          </div>

          {/* -- TICKER END ------------------------ */}
          <div
            className={
              "item widget--base " +
              (displaySettings.newsfeed ? "hideItem" : "")
            }
            key={"NewsFeed"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">
                Finhub Crypto News
              </h6>
            </div>
            <FinHubNewsWidget />
          </div>
          <div
            className={
              "item widget--base " + (displaySettings.twitter ? "hideItem" : "")
            }
            key={"twitter"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">Twitter</h6>{" "}
            </div>
            <TwitterWidget />
          </div>
          <div
            className={
              "item widget--base " +
              (displaySettings.feargreed ? "hideItem" : "")
            }
            key={"feargreed"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">Fear & Greed</h6>
            </div>
            <FearAndGreedIndex />
          </div>
          <div
            className={
              "item widget--base " +
              (displaySettings.coinMarket ? "hideItem" : "")
            }
            key={"coinMarket"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">Coin Market Cap</h6>
            </div>
            <CoinMarketWidget />
          </div>

          <div
            className={
              "item widget--base " +
              (displaySettings.tradingView ? "hideItem" : "")
            }
            key={"tradingView"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">
                TradingView Chart
              </h6>
            </div>
            <TradingViewChart isDashboard={true} />
          </div>

          <div
            className={
              "item widget--base " +
              (displaySettings.tradingViewSpeedometer ? "hideItem" : "")
            }
            key={"tradingViewSpeedometer"}
          >
            <div className="MyDragHandleClassName">
              <h6 className="text-center p-1 m-0 secondary">Buy/Sell</h6>
            </div>
            <TradingViewSpeedometer />
          </div>
        </ResponsiveGridLayout>
      </DashboardWrapper>
    </>
  );
};

const DashboardWrapper = styled.div`
  padding-right: 20px;
  background-image: linear-gradient(
    to bottom,
    ${(props) =>
      props.direction === "up"
        ? "rgba(93, 211, 158, 0.1)"
        : "rgba(205, 9, 11, 0.1)"},
    transparent
  );
`;

function getFromLS(key, mainKey) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(mainKey)) || {};
    } catch (e) {
      console.warn("getFromLs ERROR:");
    }
  }
  return ls[key];
}

function saveToLS(key, value, mainKey) {
  if (global.localStorage) {
    global.localStorage.setItem(
      mainKey,
      JSON.stringify({
        [key]: value,
      })
    );
  } else {
    console.warn("!!!! saveToLS ERROR");
  }
}

export default Dashboardpage;

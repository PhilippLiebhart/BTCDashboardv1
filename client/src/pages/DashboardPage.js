import { useEffect, useState } from "react";

import { WidthProvider, Responsive } from "react-grid-layout";
import "./Grid-styles/grid-layout-styles.css";
import "./Grid-styles/resizable-styles.css";
import "./Grid-styles/draggable-item-styles.css";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TwitterWidget from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsWidget from "../components/Dashboard/FinHubNewsWidget";
import TickerCard from "../components/Dashboard/TickerCard";
import CoinMarketWidget from "../components/Dashboard/CoinMarketWidget";

import usePhemexTicker from "../hooks/Ticker/usePhemexTicker";
import useBybitTicker from "../hooks/Ticker/useBybitTicker";
import useBinanceTicker from "../hooks/Ticker/useBinanceTicker";
import useBitmexTicker from "../hooks/Ticker/useBitmexTicker";

// const ReactGridLayout = WidthProvider(RGL);

const ResponsiveGridLayout = WidthProvider(Responsive);

const layoutLG = [
  { i: "header", x: 0, y: 0, w: 16, h: 1, minH: 1, static: true },
  { i: "21", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "22", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "23", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "24", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "NewsFeed", x: 4, y: 0, w: 6, h: 3, minH: 1 },
  { i: "twitter", x: 10, y: 0, w: 4, h: 3, minH: 1 },
  { i: "feargreed", x: 4, y: 1, w: 3, h: 1, minH: 1, minW: 3 },
  { i: "coinMarket", x: 7, y: 1, w: 6, h: 2, minH: 2, minW: 6 },
];

const layoutMD = [
  { i: "header", x: 0, y: 0, w: 16, h: 1, minH: 1, static: true },
  { i: "21", x: 0, y: 0, w: 2, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "22", x: 2, y: 0, w: 2, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "23", x: 4, y: 0, w: 2, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "24", x: 6, y: 0, w: 2, h: 1, minW: 4, maxW: 4, maxH: 1 },
  { i: "NewsFeed", x: 0, y: 0, w: 4, h: 3, minH: 1 },
  { i: "twitter", x: 0, y: 0, w: 2, h: 3, minH: 1 },
  { i: "feargreed", x: 4, y: 0, w: 2, h: 1, minH: 1, minW: 3 },
  { i: "coinMarket", x: 7, y: 1, w: 4, h: 2, minH: 2, minW: 6 },
];

const layoutXS = [
  { i: "header", x: 0, y: 0, w: 16, h: 1, minH: 1, static: true },
  { i: "21", x: 0, y: 0, w: 1, h: 1, minW: 1, maxW: 1, maxH: 1 },
  { i: "22", x: 2, y: 0, w: 1, h: 1, minW: 1, maxW: 1, maxH: 1 },
  { i: "23", x: 0, y: 0, w: 1, h: 1, minW: 1, maxW: 1, maxH: 1 },
  { i: "24", x: 2, y: 0, w: 1, h: 1, minW: 1, maxW: 1, maxH: 1 },
  { i: "NewsFeed", x: 0, y: 0, w: 2, h: 3, minH: 1 },
  { i: "twitter", x: 0, y: 0, w: 2, h: 3, minH: 1 },
  { i: "feargreed", x: 0, y: 0, w: 1, h: 1, minH: 1, minW: 2 },
  { i: "coinMarket", x: 0, y: 0, w: 2, h: 2, minH: 6, minW: 6 },
];

const Dashboardpage = ({ rowHeight = "200", cols = "2" }) => {
  const [tickerData, dayMarket, connStatus] = usePhemexTicker();
  const [
    bybitTickerData,
    bybitTickerSnapshot,
    bybitConnStatus,
  ] = useBybitTicker();
  const [binanceTickerData, binanceConnStatus] = useBinanceTicker();
  const [
    bitmexTickerData,
    bitmexTickerPartial,
    bitmexConnStatus,
  ] = useBitmexTicker();
  const [averagePrice, setAveragePrice] = useState();

  // console.log("ooooooooooooo", bitmexTickerPartial);

  const [layoutState, setLayoutState] = useState({
    layouts: { lg: layoutLG, md: layoutMD, xs: layoutXS },
  });

  useEffect(() => {
    setAveragePrice(
      (
        (bitmexTickerData?.last +
          parseFloat(binanceTickerData?.c) +
          tickerData?.tick?.last / 10000 +
          bybitTickerData?.last?.index_price_e4 / 10000) /
        4
      ).toFixed(2)
    );
  }, [tickerData, bybitTickerData, binanceTickerData, bitmexTickerData]);

  const onLayoutChange = (layout) => {
    setLayoutState({ ...layoutState, layout: layout });
  };

  const onResize = (layouts) => {
    setLayoutState({ ...layoutState, layouts: layouts });
  };

  const onBreakpointChange = (breakpoint) => {
    setLayoutState({ ...layoutState, currentBreakpoint: breakpoint });
  };

  return (
    <>
      <DashboardHeader averagePrice={averagePrice} />

      <ResponsiveGridLayout
        rowHeight={148}
        //cols={16}
        onResize={onResize}
        breakpoints={{ lg: 1000, md: 700, xs: 699 }}
        cols={{ lg: 16, md: 6, xs: 2 }}
        //autoSize={true}
        layouts={layoutState.layouts}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        draggableHandle=".MyDragHandleClassName"
        draggableCancel=".MyDragCancel"
        isDraggable={true}
        isResizable={true}
      >
        {/* -- TICKER START ------------------------ */}
        <div className="item widget--base" key={21}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="BITMEX"
              last={bitmexTickerData?.last}
              vol={parseFloat(bitmexTickerPartial?.vol)}
              high={parseFloat(bitmexTickerPartial?.high).toFixed(2)}
              low={parseFloat(bitmexTickerPartial?.low).toFixed(2)}
              status={bitmexConnStatus}
            />
          </div>
        </div>

        <div className="item widget--base" key={22}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="BINANCE"
              last={parseFloat(binanceTickerData?.c)}
              vol={parseFloat(binanceTickerData?.v).toFixed(2)}
              high={parseFloat(binanceTickerData?.h).toFixed(2)}
              low={parseFloat(binanceTickerData?.l).toFixed(2)}
              status={binanceConnStatus}
            />
          </div>
        </div>

        <div className="item widget--base" key={23}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="PHEMEX"
              last={(tickerData?.tick?.last / 10000).toFixed(2)}
              vol={dayMarket?.market24h?.volume / 10000}
              high={dayMarket?.market24h?.high / 10000}
              low={dayMarket?.market24h?.low / 10000}
              status={connStatus}
            />
          </div>
        </div>

        <div className="item widget--base" key={24}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="BYBIT"
              last={(bybitTickerData?.last?.index_price_e4 / 10000).toFixed(2)}
              vol={bybitTickerSnapshot?.data?.volume_24h / 10000}
              high={bybitTickerSnapshot?.data?.high_price_24h_e4 / 10000}
              low={bybitTickerSnapshot?.data?.low_price_24h_e4 / 10000}
              status={bybitConnStatus}
            />
          </div>
        </div>

        {/* <div className="item" key={2}>
          <div className="MyDragHandleClassName">
            Drag from Here - <span className="text">2</span>
          </div>
          <TickerWIdget />
        </div> */}
        {/* -- TICKER END ------------------------ */}
        <div className="item widget--base" key={"NewsFeed"}>
          <div className="MyDragHandleClassName">
            <h6 className="text-center p-1 m-0 secondary">
              Finhub Crypto News
            </h6>
          </div>
          <FinHubNewsWidget />
        </div>
        <div className="item widget--base" key={"twitter"}>
          <div className="MyDragHandleClassName">
            <h6 className="text-center p-1 m-0 secondary">Twitter</h6>{" "}
          </div>
          <TwitterWidget />
        </div>
        <div className="item widget--base" key={"feargreed"}>
          <div className="MyDragHandleClassName">
            <h6 className="text-center p-1 m-0 secondary">Fear and Greed</h6>
          </div>
          <FearAndGreedIndex />
        </div>
        <div className="item widget--base" key={"coinMarket"}>
          <div className="MyDragHandleClassName">
            <h6 className="text-center p-1 m-0 secondary">Coin Market Cap</h6>
          </div>
          <CoinMarketWidget />
        </div>
      </ResponsiveGridLayout>
    </>
  );
};

export default Dashboardpage;

// Dashboardpage.defaultProps = {
//   rowHeight: 150,
//   cols: 2, // to make grid item 50% or 100%
// };

import { useState } from "react";

import "./DashboardPage.css";
import RGL, { WidthProvider } from "react-grid-layout";
//  import css -- IMP!!!
import "./Grid-styles/grid-layout-styles.css";
import "./Grid-styles/resizable-styles.css";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TwitterWidget from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsWidget from "../components/Dashboard/FinHubNewsWidget";
//import TickerWIdget from "../components/Dashboard/TickerWidget";
import TickerCard from "../components/Dashboard/TickerCard";

import usePhemexTicker from "../hooks/Ticker/usePhemexTicker";
import useBybitTicker from "../hooks/Ticker/useBybitTicker";
import useBinanceTicker from "../hooks/Ticker/useBinanceTicker";
import useBitmexTicker from "../hooks/Ticker/useBitmexTicker";

const ReactGridLayout = WidthProvider(RGL);
const Dashboardpage = ({ rowHeight = "200", cols = "2" }) => {
  const [tickerData, dayMarket, connStatus] = usePhemexTicker();
  const [bybitTickerData, bybitConnStatus] = useBybitTicker();
  const [binanceTickerData, binanceConnStatus] = useBinanceTicker();
  const [bitmexTickerData, bitmexConnStatus] = useBitmexTicker();

  const [state, setState] = useState({
    layout: [
      { i: "header", x: 0, y: 0, w: 16, h: 1, minH: 1, static: true },
      { i: "21", x: 0, y: 0, w: 4, h: 1, minW: 3, maxW: 3, maxH: 1 },
      { i: "22", x: 0, y: 0, w: 4, h: 1, minW: 3, maxW: 3, maxH: 1 },
      { i: "23", x: 0, y: 0, w: 4, h: 1, minW: 3, maxW: 3, maxH: 1 },
      { i: "24", x: 0, y: 0, w: 4, h: 1, minW: 3, maxW: 3, maxH: 1 },
      { i: "NewsFeed", x: 4, y: 0, w: 6, h: 3, minH: 1 },
      { i: "twitter", x: 10, y: 0, w: 4, h: 3, minH: 1 },
      { i: "feargreed", x: 4, y: 1, w: 3, h: 1, minH: 1, minW: 2 },
    ],
    resizeplotly: false,
  });

  const onLayoutChange = (layout) => {
    setState({ layout });
  };

  const onResize = (layouts) => {
    setState({ ...state, layout: layouts });
  };

  return (
    <>
      <div className="item bg-transparent" key={"header"}>
        <DashboardHeader />
      </div>
      <ReactGridLayout
        rowHeight={148}
        cols={16}
        onResize={onResize}
        //width={100}
        // breakpoints={{ lg: 1200, xxs: 1 }}
        // cols={{ lg: 12, xxs: 2 }}
        //autoSize={true}
        layout={state.layout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".MyDragHandleClassName"
        draggableCancel=".MyDragCancel"
        isDraggable={true}
        isResizable={true}

        // useCSSTransforms={true}
      >
        {/* -- TICKER START ------------------------ */}
        <div className="item" key={21}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="BITMEX"
              last={bitmexTickerData?.last}
              vol={parseFloat(bitmexTickerData?.vol)}
              high={parseFloat(bitmexTickerData?.high).toFixed(2)}
              low={parseFloat(bitmexTickerData?.low).toFixed(2)}
              status={bitmexConnStatus}
            />
          </div>
        </div>

        <div className="item" key={22}>
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

        <div className="item" key={23}>
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

        <div className="item" key={24}>
          <div className="MyDragHandleClassName">
            <TickerCard
              name="BYBIT"
              last={(bybitTickerData?.last?.index_price_e4 / 10000).toFixed(2)}
              vol={bybitTickerData?.snapshot?.data.volume_24h / 10000}
              high={bybitTickerData?.snapshot?.data.high_price_24h_e4 / 10000}
              low={bybitTickerData?.snapshot?.data.low_price_24h_e4 / 10000}
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
        <div className="item" key={"NewsFeed"}>
          <div className="MyDragHandleClassName">
            Drag from Here - <span className="text">3</span>
          </div>
          <FinHubNewsWidget />
        </div>
        <div className="item" key={"twitter"}>
          <div className="MyDragHandleClassName">
            Drag from Here - <span className="text">4</span>
          </div>
          <TwitterWidget />
        </div>
        <div className="item" key={"feargreed"}>
          <div className="MyDragHandleClassName">
            Drag from Here - <span className="text">5</span>
          </div>
          <FearAndGreedIndex />
        </div>
      </ReactGridLayout>
    </>
  );
};

export default Dashboardpage;

// Dashboardpage.defaultProps = {
//   rowHeight: 150,
//   cols: 2, // to make grid item 50% or 100%
// };

//const TwitterWidgetWrapper = styled.div``;

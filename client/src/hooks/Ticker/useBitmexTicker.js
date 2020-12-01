import { useState, useEffect } from "react";

const WS_URL = "wss://www.bitmex.com/realtime";

const TICK_CONFIG = {
  op: "subscribe",
  args: ["instrument:XBTUSD"],
};

// const MARKET24HTICK_CONFIG = {
//   method: "market24h.subscribe",
//   params: [],
//   id: 12345,
// };

// const ORDERBOOK_CONFIG = {
//   id: 123456,
//   method: "orderbook.subscribe",
//   params: ["BTCUSD"],
// };

const HEARTBEAT = {
  op: "ping",
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

let ws = new WebSocket(WS_URL);

const useBitmexTicker = () => {
  const [bitmexConnStatus, setBitmexConnStatus] = useState();
  const [bitmexTickerData, setBitmexTickerData] = useState();
  console.log("bitmexTickerData", bitmexTickerData);
  const sendHeartbeat = () => {
    if (ws.readyState === 0) {
      ws.send(JSON.stringify(HEARTBEAT));
    } else {
      return;
    }
  };

  useEffect(() => {
    const heartbeat = setInterval(() => {
      sendHeartbeat();
    }, 3000);

    ws.onopen = () => {
      setBitmexConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      ws.send(JSON.stringify(TICK_CONFIG));
    };

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onmessage = (message) => {
    let tickData = JSON.parse(message.data);

    console.log("{{{{{{ BITMETX }}}", tickData);
    if (tickData.action === "partial") {
      setBitmexTickerData({
        ...bitmexTickerData,
        vol: tickData.data[0].turnover24h,
        low: tickData.data[0].lowPrice,
        high: tickData.data[0].highPrice,
      });
    } else {
      try {
        if (tickData.data[0].lastPriceProtected) {
          setBitmexTickerData({
            ...bitmexTickerData,
            last: tickData?.data[0]?.lastPriceProtected,
          });
        } else if (tickData.action === "partial") {
          setBitmexTickerData({
            ...bitmexTickerData,
            vol: tickData.data[0].turnover24h,
            low: tickData.data[0].lowPrice,
            high: tickData.data[0].highPrice,
          });
        }
      } catch (e) {
        console.log("66666666666666", e);
      }
    }
  };

  return [bitmexTickerData, bitmexConnStatus];
};

export default useBitmexTicker;

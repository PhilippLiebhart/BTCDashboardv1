import { useState, useEffect } from "react";

const WS_URL = "wss:/stream.binance.com/ws";

const TICK_CONFIG = {
  method: "SUBSCRIBE",
  params: ["btcusdt@ticker"],
  id: 1,
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

// const HEARTBEAT = {
//   id: 123456,
//   method: "server.ping",
//   params: [],
// };

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

let ws = new WebSocket(WS_URL);

const useBinanceTicker = () => {
  const [binanceConnStatus, setBinanceConnStatus] = useState();
  const [binanceTickerData, setBinanceTickerData] = useState();

  useEffect(() => {
    ws.onopen = () => {
      setBinanceConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      ws.send(JSON.stringify(TICK_CONFIG));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onmessage = (message) => {
    let data = JSON.parse(message.data);

    setBinanceTickerData(data);
  };

  return [binanceTickerData, binanceConnStatus];
};

export default useBinanceTicker;

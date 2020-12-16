import { useState, useEffect, useRef } from "react";

const WS_URL = "wss:/stream.binance.com/ws";

const TICK_CONFIG = {
  method: "SUBSCRIBE",
  params: ["btcusdt@ticker"],
  id: 1,
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

const useBinanceTicker = () => {
  const [binanceConnStatus, setBinanceConnStatus] = useState();
  const [binanceTickerData, setBinanceTickerData] = useState({});

  const socketRef = useRef();

  const wsInit = () => {
    let ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    socketRef.current.onopen = () => {
      setBinanceConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
      let tickData = JSON.parse(message.data);

      setBinanceTickerData({
        ...binanceTickerData,
        last: parseFloat(tickData.c),
        vol: parseFloat(tickData.v),
        high: parseFloat(tickData.h),
        low: parseFloat(tickData.l),
      });
    };
  };

  useEffect(() => {
    wsInit();
  }, []);

  return [binanceTickerData, binanceConnStatus];
};

export default useBinanceTicker;

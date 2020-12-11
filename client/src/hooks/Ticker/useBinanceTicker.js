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
  //console.log("{{{BINANCE TICKER RUNS}}}", binanceConnStatus);

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
        last: tickData.c,
        vol: tickData.v,
        high: tickData.h,
        low: tickData.l,
      });
    };
  };

  useEffect(() => {
    wsInit();
  }, []);

  return [binanceTickerData, binanceConnStatus];
};

export default useBinanceTicker;

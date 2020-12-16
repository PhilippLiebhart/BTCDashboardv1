import { useState, useEffect, useRef } from "react";

const WS_URL = "wss://phemex.com/ws";

const TICK_CONFIG = {
  id: 1234,
  method: "tick.subscribe",
  params: [".BTC"],
};

const MARKET24HTICK_CONFIG = {
  method: "market24h.subscribe",
  params: [],
  id: 12345,
};

const HEARTBEAT = {
  id: 123456,
  method: "server.ping",
  params: [],
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

const usePhemexTicker = () => {
  const [phemexConnStatus, setPhemexConnStatus] = useState();
  const [phemexTickerLastPrice, setPhemexTickerLastPrice] = useState();
  const [phemexTickerData, setPhemexTickerData] = useState({});
  const socketRef = useRef();

  const wsInit = () => {
    const ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    socketRef.current.onopen = () => {
      setPhemexConnStatus(WEBSOCKET_STATUS[socketRef.current.readyState]);
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
      socketRef.current.send(JSON.stringify(MARKET24HTICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
      let tickData = JSON.parse(message.data);
      if (tickData?.tick) {
      } else if (tickData?.market24h?.symbol === "BTCUSD") {
        setPhemexTickerData({
          ...tickData,
          vol: tickData.market24h?.volume,
          low: tickData.market24h?.low,
          high: tickData.market24h?.high,
        });
        setPhemexTickerLastPrice({
          ...tickData,
          last: tickData.market24h?.indexPrice,
        });
      } else {
        // console.log("[[!! phemex no matching criteria !!]]");
      }
    };
  };

  useEffect(() => {
    wsInit();

    const heartbeat = setInterval(() => {
      socketRef.current.send(JSON.stringify(HEARTBEAT));
    }, 5000);

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [phemexTickerLastPrice, phemexTickerData, phemexConnStatus];
};

export default usePhemexTicker;

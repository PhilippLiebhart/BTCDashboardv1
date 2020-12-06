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

// const ORDERBOOK_CONFIG = {
//   id: 123456,
//   method: "orderbook.subscribe",
//   params: ["BTCUSD"],
// };

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
  const [connStatus, setConnStatus] = useState();
  const [tickerData, setTickerData] = useState();
  const [dayMarket, setDayMarket] = useState({});

  const socketRef = useRef();

  const wsInit = () => {
    const ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    socketRef.current.onopen = () => {
      setConnStatus(WEBSOCKET_STATUS[socketRef.current.readyState]);
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
      socketRef.current.send(JSON.stringify(MARKET24HTICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
      let { tick, market24h } = JSON.parse(message.data);

      if (tick) {
        setTickerData({ tick, last: tick.last });
      } else if (market24h?.symbol === "BTCUSD") {
        setDayMarket({ market24h });
      } else {
        console.log("[[!! phemex no matching criteria !!]]");
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

  return [tickerData, dayMarket, connStatus];
};

export default usePhemexTicker;

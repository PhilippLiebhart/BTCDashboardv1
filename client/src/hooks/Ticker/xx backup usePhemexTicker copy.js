import { useState, useEffect } from "react";

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

const ORDERBOOK_CONFIG = {
  id: 123456,
  method: "orderbook.subscribe",
  params: ["BTCUSD"],
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
let ws = new WebSocket(WS_URL);

const usePhemexTicker = () => {
  const [connStatus, setConnStatus] = useState();
  const [tickerData, setTickerData] = useState();
  const [dayMarket, setDayMarket] = useState({});
  // const [orderbook, setOrderbook] = useState({ data: 0, fetched: false });

  const initWs = () => {
    ws.onopen = () => {
      setConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      ws.send(JSON.stringify(TICK_CONFIG));
      ws.send(JSON.stringify(MARKET24HTICK_CONFIG));
      // ws.send(JSON.stringify(ORDERBOOK_CONFIG));
    };

    ws.onmessage = (message) => {
      let { tick, market24h } = JSON.parse(message.data);

      //console.log("[--PHEMEX---]", JSON.parse(message.data));
      if (tick) {
        setTickerData({ tick, last: tick.last });
      } else if (market24h?.symbol === "BTCUSD") {
        setDayMarket({ market24h });
      } else {
        console.log("[[!! no matching criteria !!]]");
      }
    };
  };

  const sendHeartbeat = () => {
    if (ws.readyState === 0) {
      ws.send(JSON.stringify(HEARTBEAT));
    } else {
      return;
    }
  };

  useEffect(() => {
    initWs();
    const heartbeat = setInterval(() => {
      sendHeartbeat();
      console.log(
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
      );
    }, 5000);

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [tickerData, dayMarket, connStatus];
};

export default usePhemexTicker;

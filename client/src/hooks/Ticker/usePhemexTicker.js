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
      console.log(
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
      );
    }, 5000);

    ws.onopen = () => {
      setConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      ws.send(JSON.stringify(TICK_CONFIG));
      ws.send(JSON.stringify(MARKET24HTICK_CONFIG));
      // ws.send(JSON.stringify(ORDERBOOK_CONFIG));
    };

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onmessage = (message) => {
    let { tick, market24h } = JSON.parse(message.data);

    //console.log("[--PHEMEX---]", JSON.parse(message.data));
    if (tick) {
      setTickerData({ tick, last: tick.last });
    } else if (market24h?.symbol === "BTCUSD") {
      setDayMarket({ market24h });
    }
    // else if (book) {
    //   setOrderbook({ data: { ...book }, fetched: true });

    //   //todo ob das hier so richtig ist?
    //   const unsubscribeOrderbook = {
    //     id: 123456,
    //     method: "orderbook.unsubscribe",
    //     params: [],
    //   };
    //   ws.send(JSON.stringify(unsubscribeOrderbook));
    // }
    else {
      console.log("[[!! no matching criteria !!]]");
    }
  };

  return [tickerData, dayMarket, connStatus];
};

export default usePhemexTicker;

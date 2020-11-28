import { useState, useEffect } from "react";

const PHEMEX_TICK_CONFIG = {
  id: 1234,
  method: "tick.subscribe",
  params: [".BTC"],
};

const PHEMEX_24HTICK_CONFIG = {
  id: 12345,
  method: "market24h.subscribe",
  params: [],
};

const PHEMEX_HEARTBEAT = {
  id: 123456,
  method: "server.ping",
  params: [],
};
let ws = new WebSocket("wss://phemex.com/ws");

const usePhemexTicker = (props) => {
  const { readyState } = ws;

  console.log("-----------------------", ws);

  const [tick, setTick] = useState({ last: 0 });
  const [dayMarket, setDayMarket] = useState({});
  const [orderbook, setOrderbook] = useState({ data: 0, fetched: false });

  const sendHeartbeat = () => {
    let heartbeatMessage = {
      //TODO id egal?
      id: 123456,
      method: "server.ping",
      params: [],
    };
    if (readyState === 0) {
      ws.send(JSON.stringify(heartbeatMessage));
    } else {
      return;
    }
  };

  useEffect(() => {
    const heartbeat = setInterval(() => {
      sendHeartbeat();
    }, 3000);

    const reqTickMessage = {
      id: 1234,
      method: "tick.subscribe",
      params: [".BTC"],
    };
    const req24hTickMessage = {
      method: "market24h.subscribe",
      params: [],
      id: 12345,
    };
    const reqOrderbookMessage = {
      id: 123456,
      method: "orderbook.subscribe",
      params: ["BTCUSD"],
    };

    ws.onopen = () => {
      //TODO 2 anfragen in einem schicken?
      ws.send(JSON.stringify(reqTickMessage));
      ws.send(JSON.stringify(req24hTickMessage));
      ws.send(JSON.stringify(reqOrderbookMessage));
    };

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onmessage = (message) => {
    // TODO passt das so? tick ist ja eigentlich entweder "tick" ODER "market"....
    let { tick, market24h, book } = JSON.parse(message.data);
    console.log("phemex ws message", message);

    if (tick) {
      setTick({ last: (tick.last / 10000).toFixed(2) });
    } else if (market24h?.symbol === "BTCUSD") {
      setDayMarket({ market24h });
    } else if (book) {
      console.log("BOOKGOOD", book.asks.length);
      setOrderbook({ data: { ...book }, fetched: true });

      //TODO ob das hier so richtig ist?
      const unsubscribeOrderbook = {
        id: 123456,
        method: "orderbook.unsubscribe",
        params: [],
      };
      ws.send(JSON.stringify(unsubscribeOrderbook));
    } else {
      console.log("!! tick is still undefined !!!!");
    }
  };

  return [tick, dayMarket, orderbook];
};

export default usePhemexTicker;

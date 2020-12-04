import { useState, useEffect } from "react";

const WS_URL = "wss://stream.bytick.com/realtime";

const TICK_CONFIG = {
  op: "subscribe",
  args: ["instrument_info.100ms.BTCUSD"],
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

const useBybitTicker = () => {
  const [bybitConnStatus, setBybitConnStatus] = useState();
  const [bybitTickerData, setBybitTickerData] = useState();

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

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onopen = () => {
    setBybitConnStatus(WEBSOCKET_STATUS[ws.readyState]);
    ws.send(JSON.stringify(TICK_CONFIG));
  };

  ws.onmessage = (message) => {
    let tickData = JSON.parse(message.data);
    if (
      tickData.type === "delta" &&
      tickData.data.update[0]?.hasOwnProperty("index_price_e4")
    ) {
      setBybitTickerData({
        ...bybitTickerData,
        last: tickData?.data?.update[0],
      });
    } else if (tickData.type === "snapshot") {
      setBybitTickerData({ ...bybitTickerData, snapshot: tickData });
    } else {
      console.log("X");
    }
  };

  return [bybitTickerData, bybitConnStatus];
};

export default useBybitTicker;

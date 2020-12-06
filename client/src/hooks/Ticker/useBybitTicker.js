import { useState, useEffect, useRef } from "react";

const WS_URL = "wss://stream.bytick.com/realtime";

const TICK_CONFIG = {
  op: "subscribe",
  args: ["instrument_info.100ms.BTCUSD"],
};

const HEARTBEAT = {
  op: "ping",
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

const useBybitTicker = () => {
  const [bybitConnStatus, setBybitConnStatus] = useState();
  const [bybitTickerData, setBybitTickerData] = useState();
  const [bybitTickerSnapshot, setBybitTickerSnapshot] = useState();

  const socketRef = useRef();

  const wsInit = () => {
    const ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    socketRef.current.onopen = () => {
      setBybitConnStatus(WEBSOCKET_STATUS[ws.readyState]);
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
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
        setBybitTickerSnapshot({ ...tickData });
      } else {
        console.log("[[[[bybit no matching message]]]]");
      }
    };
  };

  useEffect(() => {
    wsInit();
    const heartbeat = setInterval(() => {
      socketRef.current.send(JSON.stringify(HEARTBEAT));
    }, 3000);

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [bybitTickerData, bybitTickerSnapshot, bybitConnStatus];
};

export default useBybitTicker;

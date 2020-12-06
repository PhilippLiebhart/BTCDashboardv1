import { useState, useEffect, useRef } from "react";

const WS_URL = "wss://www.bitmex.com/realtime";

const TICK_CONFIG = {
  op: "subscribe",
  args: ["instrument:XBTUSD"],
};

const HEARTBEAT = {
  op: "ping",
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

const useBitmexTicker = () => {
  const [bitmexConnStatus, setBitmexConnStatus] = useState();
  const [bitmexTickerData, setBitmexTickerData] = useState();
  const [bitmexTickerPartial, setBitmexTickerPartial] = useState();

  const socketRef = useRef();

  const wsInit = () => {
    const ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    socketRef.current.onopen = () => {
      setBitmexConnStatus(WEBSOCKET_STATUS[socketRef.current.readyState]);
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
      let tickData = JSON.parse(message.data);

      if (tickData.action === "partial") {
        setBitmexTickerPartial({
          vol: tickData.data[0].turnover24h,
          low: tickData.data[0].lowPrice,
          high: tickData.data[0].highPrice,
        });
      } else if (tickData?.data[0]?.fairPrice) {
        setBitmexTickerData({
          ...bitmexTickerData,
          last: tickData?.data[0]?.fairPrice,
        });
      } else {
        console.log("{{{{{ BITMEX message not matching! }}}}}}");
      }
    };
  };

  useEffect(() => {
    wsInit();

    const heartbeat = setInterval(() => {
      if (socketRef.current.readyState === 0) {
        socketRef.current.send(JSON.stringify(HEARTBEAT));
      } else {
        return;
      }
    }, 3000);

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [bitmexTickerData, bitmexTickerPartial, bitmexConnStatus];
};

export default useBitmexTicker;

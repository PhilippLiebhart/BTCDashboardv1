import { useState, useEffect, useRef } from "react";

const WS_URL = "wss://api-aws.huobi.pro/ws";

const TICK_CONFIG = {
  sub: "market.btcusdt.kline.1min",
  id: "id21",
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
  id: 123456,
  method: "server.ping",
  params: [],
};

const WEBSOCKET_STATUS = {
  1: "green",
  2: "red",
  3: "yellow",
};

const useHuobiTicker = () => {
  // const [huobiConnStatus, setHuobiConnStatus] = useState();
  // const [huobiTickerLastPrice, setHuobiTickerLastPrice] = useState();
  const [huobiTickerData, setHuobiTickerData] = useState({});
  const socketRef = useRef();

  const wsInit = () => {
    const ws = new WebSocket(WS_URL);
    ws.binaryType = "blob";
    socketRef.current = ws;
    socketRef.current.onopen = () => {
      // setHuobiConnStatus(WEBSOCKET_STATUS[socketRef.current.readyState]);
      console.log(
        "OOOPEN!!!!!!!---------------------------------------------------------------------",
        socketRef.current
      );
      socketRef.current.send(JSON.stringify(TICK_CONFIG));
    };

    socketRef.current.onmessage = (message) => {
      let tickData = message.data;
      // socketRef.current.send(message);
      console.log("################## HUOBI:::", tickData);

      var reader = new FileReader();
      reader.addEventListener("loadend", function () {
        // reader.result contains the contents of blob as a typed array
        console.log("READDER RESULT:", reader.result);
      });
      reader.readAsText(tickData);
    };
  };

  useEffect(() => {
    wsInit();

    // const heartbeat = setInterval(() => {
    //   socketRef.current.send(JSON.stringify(HEARTBEAT));
    // }, 5000);

    // return () => {
    //   clearInterval(heartbeat);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [huobiTickerData];
};

export default useHuobiTicker;

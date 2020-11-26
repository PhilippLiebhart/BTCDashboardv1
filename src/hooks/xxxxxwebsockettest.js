import { useState, useEffect } from "react";

const PHEMEX_CONFIG = {
  pingMethod: "server.ping",
  tickMethod: "tick.subscribe",
  tickParams: [".BTC"],
};

export default function Websockettest(props) {
  let ws = new WebSocket("wss://phemex.com/ws");

  const { readyState } = ws;
  console.log("READYSTATE:", readyState);

  const [tick, setTick] = useState({ last: 0 });
  //console.log("MY TICKER STATE", ticker);

  const sendHeartbeat = () => {
    let heartbeatMessage = {
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
      console.log(
        "HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT HEARTBEAT "
      );
    }, 3000);

    let reqMessage = {
      id: 1234,
      method: "tick.subscribe",
      params: [".BTC"],
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(reqMessage));
    };

    return () => {
      clearInterval(heartbeat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ws.onmessage = (message) => {
    let { tick } = JSON.parse(message.data);

    console.log("[MESSSAGE]::", message.data);

    if (tick) {
      //console.log("TICK LAST", tick.last);
      setTick(tick);
    } else {
      console.log("still undeined");
    }
  };

  let lastPrice = tick.last / 10000;

  return lastPrice.toFixed(2);
}

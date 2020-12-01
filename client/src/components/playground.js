import TickerCard from "./Dashboard/TickerCard";

import usePhemexTicker from "../hooks/Ticker/usePhemexTicker";

const Playground = () => {
  const [tickerData, dayMarket, orderbook, connStatus] = usePhemexTicker();

  return (
    <>
      <h1>{tickerData?.last}</h1>
      <h1>{dayMarket?.market24h?.volume / 10000}</h1>
      <h1>{connStatus}</h1>
      <TickerCard
        name="PHEMEX"
        last={(tickerData?.tick?.last / 10000).toFixed(2)}
        vol={dayMarket?.market24h?.volume / 10000}
        high={dayMarket?.market24h?.high / 10000}
        low={dayMarket?.market24h?.low / 10000}
        status={connStatus}
      />
    </>
  );
};

export default Playground;

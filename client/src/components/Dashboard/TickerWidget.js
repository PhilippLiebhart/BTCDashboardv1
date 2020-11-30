import { useEffect } from "react";
import TickerCard from "./TickerCard";
import usePhemexTicker from "../../hooks/usePhemexTicker";

const TickerWIdget = () => {
  // const [mean, setMean] = useState();
  const [tickerData, dayMarket, orderbook, connStatus] = usePhemexTicker();

  //todo strange behaviour - tick only avalable if console.log is there
  //console.log("----------------------------", tickerData);
  console.log("----------------------------", orderbook);

  // useEffect(() => {
  //   setMean(
  //     (
  //       (parseFloat(tick.price) +
  //         parseFloat(binanceTick.price) +
  //         parseFloat(bybitTick.price)) /
  //       3
  //     ).toFixed(2)
  //   );
  // }, [tick, binanceTick, bybitTick]);

  //todo CLOCK, dailyChange, connectionStatus, tickerDirection

  return (
    <>
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

export default TickerWIdget;

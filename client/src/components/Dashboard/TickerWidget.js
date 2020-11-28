const { default: TickerCard } = require("./TickerCard");

const TickerWIdget = () => {
  // const [mean, setMean] = useState();

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

  // const WEBSOCKET_STATUS = {
  //     Open: "green",
  //     Closed: "red",
  //     Connecting: "yellow",
  //   };

  return (
    <>
      <TickerCard name="PHEMEX" />
    </>
  );
};

export default TickerWIdget;

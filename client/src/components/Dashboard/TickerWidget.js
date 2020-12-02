import TickerCard from "./TickerCard";
import usePhemexTicker from "../../hooks/Ticker/usePhemexTicker";
import useBybitTicker from "../../hooks/Ticker/useBybitTicker";
import useBinanceTicker from "../../hooks/Ticker/useBinanceTicker";
import useBitmexTicker from "../../hooks/Ticker/useBitmexTicker";

import styled from "styled-components";

const TickerWIdget = () => {
  const [tickerData, dayMarket, connStatus] = usePhemexTicker();
  const [bybitTickerData, bybitConnStatus] = useBybitTicker();
  const [binanceTickerData, binanceConnStatus] = useBinanceTicker();
  const [bitmexTickerData, bitmexConnStatus] = useBitmexTicker();

  return (
    <>
      <TickerCardsWrapper>
        <TickerCard
          name="BITMEX"
          last={bitmexTickerData?.last}
          vol={parseFloat(bitmexTickerData?.vol)}
          high={parseFloat(bitmexTickerData?.high).toFixed(2)}
          low={parseFloat(bitmexTickerData?.low).toFixed(2)}
          status={bitmexConnStatus}
        />
        <TickerCard
          name="BINANCE"
          last={parseFloat(binanceTickerData?.c)}
          vol={parseFloat(binanceTickerData?.v).toFixed(2)}
          high={parseFloat(binanceTickerData?.h).toFixed(2)}
          low={parseFloat(binanceTickerData?.l).toFixed(2)}
          status={binanceConnStatus}
        />
        <TickerCard
          name="PHEMEX"
          last={(tickerData?.tick?.last / 10000).toFixed(2)}
          vol={dayMarket?.market24h?.volume / 10000}
          high={dayMarket?.market24h?.high / 10000}
          low={dayMarket?.market24h?.low / 10000}
          status={connStatus}
        />
        <TickerCard
          name="BYBIT"
          last={(bybitTickerData?.last?.index_price_e4 / 10000).toFixed(2)}
          vol={bybitTickerData?.snapshot?.data.volume_24h / 10000}
          high={bybitTickerData?.snapshot?.data.high_price_24h_e4 / 10000}
          low={bybitTickerData?.snapshot?.data.low_price_24h_e4 / 10000}
          status={bybitConnStatus}
        />
      </TickerCardsWrapper>
    </>
  );
};

export default TickerWIdget;

const TickerCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

import { useEffect, useContext } from "react";
import styled from "styled-components";
import { DashboardContext } from "../../context/DashboardContext";
import useCoinmarketCap from "../../hooks/useCoinmarketCap";

const CoinMarketWidget = () => {
  const context = useContext(DashboardContext);
  const { handleCoinMarketDataContext } = context;

  const [coinmarketData] = useCoinmarketCap();

  const handleBtc24hDirection = (coinmarketData) => {
    const winner24h = get24hWinner(coinmarketData);
    const loser24h = get24hWLoser(coinmarketData);

    if (isDataAvailable(coinmarketData) < 0) {
      handleCoinMarketDataContext({
        direction: "down",
        percent24h: coinmarketData.data[0].quote.USD.percent_change_24h.toFixed(
          2
        ),
        winner24h: winner24h,
        loser24h: loser24h,
      });
    } else if (isDataAvailable(coinmarketData) > 0) {
      handleCoinMarketDataContext({
        direction: "up",
        percent24h: coinmarketData.data[0].quote.USD.percent_change_24h.toFixed(
          2
        ),
        winner24h: winner24h,
        loser24h: loser24h,
      });
    }
  };

  useEffect(() => {
    handleBtc24hDirection(coinmarketData);
  }, [coinmarketData]); // eslint-disable-line react-hooks/exhaustive-deps

  const get24hWinner = (coinmarketData) => {
    return coinmarketData?.data?.reduce((accumulator, currentValue) =>
      accumulator.quote?.USD.percent_change_24h >
      currentValue.quote?.USD.percent_change_24h
        ? accumulator
        : currentValue
    );
  };
  const get24hWLoser = (coinmarketData) => {
    return coinmarketData?.data?.reduce((accumulator, currentValue) =>
      accumulator.quote?.USD.percent_change_24h >
      currentValue.quote?.USD.percent_change_24h
        ? currentValue
        : accumulator
    );
  };
  const isDataAvailable = (coinmarketData) => {
    return (
      coinmarketData.data &&
      coinmarketData.data[0]?.quote.USD.percent_change_24h
    );
  };

  return (
    <CoinMarketWrapper>
      <table className="">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">24h % change</th>
            <th scope="col">Year added</th>
          </tr>
        </thead>
        <tbody>
          {coinmarketData?.data?.slice(0, 7).map((coin, index) => {
            return (
              <tr key={index}>
                <td className="">{coin.name}</td>
                <td className="">
                  {coin.quote.USD.percent_change_24h.toFixed(2)} %
                </td>
                <td className="">{coin.date_added.slice(0, 7)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CoinMarketWrapper>
  );
};

const CoinMarketWrapper = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 0.8rem;
  table {
    margin: 0 auto;
    width: 100%;
    td {
      padding: 13px 0 13px 0;
    }
  }
`;

export default CoinMarketWidget;

import useCoinmarketCap from "../../hooks/useCoinmarketCap";

const CoinMarketWidget = () => {
  const [coinmarketData] = useCoinmarketCap();

  return (
    <div className="p-2">
      <h6>coinmarketcap</h6>
      <table className="table table-striped mr-3 text-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">symbol</th>
            <th scope="col">24h % change</th>
            <th scope="col">Year added</th>
          </tr>
        </thead>
        <tbody>
          {coinmarketData?.data?.slice(0, 5).map((coin, index) => {
            return (
              <tr key={index}>
                <td className="p-1 m-0 text-center border-0">{coin.name}</td>
                <td className="p-1 m-0 text-center border-0">{coin.symbol}</td>
                <td className="p-1 m-0 text-center border-0">
                  {coin.quote.USD.percent_change_24h.toFixed(2)} %
                </td>
                <td className="p-0 m-0 text-center border-0">
                  {coin.date_added.slice(0, 4)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinMarketWidget;

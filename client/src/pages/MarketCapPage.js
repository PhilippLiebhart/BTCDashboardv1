import useCoinmarketCap from "../hooks/useCoinmarketCap";

const MarketCapPage = () => {
  const [coinmarketData] = useCoinmarketCap();

  return (
    <div className="d-flex flex-nowrap p-3">
      <div>
        <h6>Asks</h6>
        <table className="table table-striped table-dark mr-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">symbol</th>
              <th scope="col">% change</th>
              <th scope="col">date_added</th>
            </tr>
          </thead>
          <tbody>
            {coinmarketData?.data?.map((coin, index) => {
              return (
                <tr key={index}>
                  <td className="p-0 m-0 text-center">{coin.name}</td>
                  <td className="p-0 m-0 text-center">{coin.symbol}</td>
                  <td className="p-0 m-0 text-center">
                    {coin.quote.USD.percent_change_24h}
                  </td>
                  <td className="p-0 m-0 text-center">{coin.date_added}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketCapPage;

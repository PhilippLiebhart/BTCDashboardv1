import useCoinmarketCap from "../hooks/useCoinmarketCap";

const MarketCapPage = () => {
  const [coinmarketData] = useCoinmarketCap();
  console.log("coinmarketData", coinmarketData);

  return <h1>hula</h1>;
};

export default MarketCapPage;

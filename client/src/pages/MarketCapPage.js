import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../components/UI/Spinner";

import useCoinmarketCap from "../hooks/useCoinmarketCap";

const MarketCapPage = () => {
  const [coinmarketData] = useCoinmarketCap();

  const [coinsList, setCoinsList] = useState();

  useEffect(() => {
    setCoinsList(coinmarketData.data);
  }, [coinmarketData]);

  const sortByPercent = () => {
    const list = [...coinsList];

    list.sort(
      (a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h
    );

    setCoinsList([...list]);
  };

  console.log("äää", coinsList);

  return (
    <MarketCapPageWrapper>
      <table className="coinMarketTable">
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>symbol</th>
            <th onClick={sortByPercent}>% change</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {coinsList ? (
            coinsList.map((coin, index) => {
              return (
                <TableTr
                  up={coin.quote.USD.percent_change_24h > 0}
                  className="row-effect"
                >
                  <td>{index + 1}</td>
                  <td>{coin.name}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.quote.USD.percent_change_24h.toFixed(2)} %</td>
                  <td>{coin.date_added.slice(0, 4)}</td>
                </TableTr>
              );
            })
          ) : (
            <Spinner />
          )}
        </tbody>
      </table>
    </MarketCapPageWrapper>
  );
};

export default MarketCapPage;

const MarketCapPageWrapper = styled.div`
  .coinMarketTable {
    text-align: left;
    margin: 100px auto;
    /* border-collapse: collapse; */
    border-spacing: 0px;
    background-color: var(--dashWidgetBgDarker);
    cursor: crosshair;
    font-size: 0.9rem;
  }

  tr.row-effect:hover {
    background-color: var(--DashBgDark) !important;
  }

  tr.row-effect:hover td {
    color: var(--primary);
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: var(--dashWidgetBgDark);
  }

  .coinMarketTable th,
  .coinMarketTable td {
    padding: 10px;
    color: #ddd;
  }

  .coinMarketTable th {
    text-align: left;
    color: #ecf0f1;
  }
`;

const tableColorRed =
  "linear-gradient(180deg, rgba(253,29,29,0.04665616246498594) 0%, rgba(253,29,29,0.02984943977591037) 49%, rgba(253,29,29,0.04945728291316531) 100%)";
const tableColorGreen =
  "linear-gradient(180deg, rgba(29,253,98,0.052258403361344574) 0%, rgba(29,253,98,0.03265056022408963) 49%, rgba(29,253,98,0.052258403361344574) 100%)";

const TableTr = styled.tr`
  background: ${(props) =>
    props.up ? tableColorGreen : tableColorRed} !important;
`;

import styled from "styled-components";
import Dashboardheader from "../components/Dashboard/DashboardHeader";
import Spinner from "../components/UI/Spinner";

import useCoinmarketCap from "../hooks/useCoinmarketCap";

const MarketCapPage = () => {
  const [coinmarketData] = useCoinmarketCap();

  return (
    <MarketCapPageWrapper>
      <table className="coinMarketTable">
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>symbol</th>
            <th>% change</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {coinmarketData.data ? (
            coinmarketData?.data?.map((coin, index) => {
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
    border-spacing: 1px;
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

const TableTr = styled.tr`
  background-color: ${(props) =>
    props.up ? "rgba(40, 167, 69, 0.3)" : "rgba(220, 53, 69, 0.2)"} !important;
`;

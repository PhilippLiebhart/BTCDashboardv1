import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../components/UI/Spinner";

import useCoinmarketCap from "../hooks/useCoinmarketCap";

const LIST_KEYS = {
  name: "name",
  dateAdded: "date_added",
  change1h: "percent_change_1h",
  change24h: "percent_change_24h",
  chnage7d: "percent_change_7d",
  symbol: "symbol",
  rank: "cmc_rank",
};

const MarketCapPage = () => {
  const [coinmarketData] = useCoinmarketCap();

  const [coinsList, setCoinsList] = useState();
  const [sortInfo, setSortInfo] = useState({
    key: "PERCENT",
    direction: "ASC",
  });

  useEffect(() => {
    const transformedArray = coinmarketData?.data?.map((coin) => {
      return {
        ...coin,
        percent_change_24h: coin.quote.USD.percent_change_24h,
        percent_change_1h: coin.quote.USD.percent_change_1h,
        percent_change_7d: coin.quote.USD.percent_change_7d,
      };
    });

    setCoinsList(transformedArray);
  }, [coinmarketData]);

  const sortByNumber = (key) => {
    const sortedList = [...coinsList];

    if (sortInfo.direction === "ASC") {
      sortedList.sort((a, b) => b[key] - a[key]);

      setListsHandler("DESC", key, sortedList);
    } else if (sortInfo.direction === "DESC") {
      sortedList.sort((a, b) => b[key] - a[key]).reverse();

      setListsHandler("ASC", key, sortedList);
    }
  };

  const sortByString = (key) => {
    const sortedList = [...coinsList];

    if (sortInfo.direction === "ASC") {
      sortedList.sort((stringA, stringB) =>
        stringA[key].localeCompare(stringB[key])
      );

      setListsHandler("DESC", key, sortedList);
    } else if (sortInfo.direction === "DESC") {
      sortedList.sort((stringA, stringB) =>
        stringB[key].localeCompare(stringA[key])
      );

      setListsHandler("ASC", key, sortedList);
    }
  };

  const sortByDate = (key) => {
    const sortedList = [...coinsList];

    if (sortInfo.direction === "ASC") {
      sortedList.sort(
        (dateA, dateB) => new Date(dateB[key]) - new Date(dateA[key])
      );

      setListsHandler("DESC", key, sortedList);
    } else if (sortInfo.direction === "DESC") {
      sortedList
        .sort((dateA, dateB) => new Date(dateB[key]) - new Date(dateA[key]))
        .reverse();
      setListsHandler("ASC", key, sortedList);
    }
  };

  const setListsHandler = (direction, key, sortedList) => {
    setSortInfo({ direction: direction, key: key });
    setCoinsList([...sortedList]);
  };

  return (
    <MarketCapPageWrapper>
      <table className="coinMarketTable">
        <thead>
          <tr>
            <th onClick={() => sortByNumber(LIST_KEYS.rank)}>Place</th>
            <th onClick={() => sortByString(LIST_KEYS.name)}>Name</th>
            <th onClick={() => sortByString(LIST_KEYS.symbol)}>symbol</th>
            <th onClick={() => sortByNumber(LIST_KEYS.change1h)}>1h change</th>
            <th onClick={() => sortByNumber(LIST_KEYS.change24h)}>
              24h change
            </th>
            <th onClick={() => sortByNumber(LIST_KEYS.chnage7d)}>7d change</th>
            <th onClick={() => sortByDate(LIST_KEYS.dateAdded)}>Date added</th>
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
                  <td>{coin.cmc_rank}</td>
                  <td>{coin.name}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.quote.USD.percent_change_1h.toFixed(2)} %</td>
                  <td>{coin.quote.USD.percent_change_24h.toFixed(2)} %</td>
                  <td>{coin.quote.USD.percent_change_7d.toFixed(2)} %</td>
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
    background-color: var(--DashBgDark);
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

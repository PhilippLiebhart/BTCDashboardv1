import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../components/UI/Spinner";

import useCoinmarketCap from "../hooks/useCoinmarketCap";

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

  const sortByKey = (key) => {
    console.log("SORT BY KEY", key);
    const list = [...coinsList];

    if (sortInfo.direction === "ASC") {
      console.log("ASC", key);
      list.sort((a, b) => b[key] - a[key]);
      setCoinsList([...list]);
      setSortInfo({ direction: "DESC", key: key });
    } else if (sortInfo.direction === "DESC") {
      console.log("DESC", key);
      list.sort((a, b) => b[key] - a[key]).reverse();
      setCoinsList([...list]);
      setSortInfo({ direction: "ASC", key: key });
    } else {
      return;
    }
  };

  const sortByDate = (key) => {
    const list = [...coinsList];

    if (sortInfo.direction === "ASC") {
      list.sort((a, b) => new Date(b[key]) - new Date(a[key]));
      setCoinsList([...list]);
      setSortInfo({ direction: "DESC", key: key });
    } else if (sortInfo.direction === "DESC") {
      list.sort((a, b) => new Date(b[key]) - new Date(a[key])).reverse();
      setCoinsList([...list]);
      setSortInfo({ direction: "ASC", key: key });
    } else {
      console.log("NOTHING");
    }

    setCoinsList([...list]);
  };

  const sortHandler = (action) => {
    switch (action) {
      case "NAME":
        const nameKey = "name";
        sortByKey(nameKey);
        // list.sort((a, b) => a.name.localeCompare(b.name));
        // setCoinsList([...list]);

        break;
      case "SYMBOL":
        const symbolKey = "symbol";
        sortByKey(symbolKey);

        break;

      case "PERCENT1h":
        const percent1hKey = "percent_change_1h";
        sortByKey(percent1hKey);

        break;
      case "PERCENT24h":
        const percent24Key = "percent_change_24h";
        sortByKey(percent24Key);
        break;

      case "PERCENT7d":
        const percent7dKey = "percent_change_7d";
        sortByKey(percent7dKey);

        break;
      case "DATE_ADDED":
        const dateKey = "date_added";
        sortByDate(dateKey);
        break;

      default:
        break;
    }
  };

  console.log("äää", coinsList);

  return (
    <MarketCapPageWrapper>
      <table className="coinMarketTable">
        <thead>
          <tr>
            <th>Place</th>
            <th onClick={() => sortHandler("NAME")}>Name</th>
            <th onClick={() => sortHandler("SYMBOL")}>symbol</th>
            <th onClick={() => sortHandler("PERCENT1h")}>1h change</th>
            <th onClick={() => sortHandler("PERCENT24h")}>24h change</th>
            <th onClick={() => sortHandler("PERCENT7d")}>7d change</th>
            <th onClick={() => sortHandler("DATE_ADDED")}>Date added</th>
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

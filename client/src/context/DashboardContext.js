import React from "react";
import { useState } from "react";

export const DashboardContext = React.createContext();

const DashboardContextProvider = (props) => {
  const [coinMarketData, setCoinMarketData] = useState({
    direction: "no direction",
    percent24h: "no data",
    winner24h: "no data",
    loser24h: "no data",
  });

  const handleCoinMarketData = (props) => {
    setCoinMarketData({ ...coinMarketData, ...props });
  };

  return (
    <DashboardContext.Provider
      value={{ ...coinMarketData, handleCoinMarketData: handleCoinMarketData }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;

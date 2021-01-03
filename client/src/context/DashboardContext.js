import React, { useState } from "react";

export const DashboardContext = React.createContext();

const DashboardContextProvider = (props) => {
  const [coinMarketData, setCoinMarketData] = useState({
    direction: "no direction",
    percent24h: "no data",
    winner24h: "no data",
    loser24h: "no data",
  });

  const [layoutStatus, setLayoutStatus] = useState({
    breakpoint: "xs",
  });

  const handleLayoutChange = (props) => {
    setLayoutStatus({ breakpoint: props.breakpoint });
  };

  const handleCoinMarketDataContext = (props) => {
    setCoinMarketData({ ...coinMarketData, ...props });
  };

  return (
    <DashboardContext.Provider
      value={{
        ...coinMarketData,
        ...layoutStatus,
        handleCoinMarketDataContext: handleCoinMarketDataContext,
        handleLayoutChange: handleLayoutChange,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;

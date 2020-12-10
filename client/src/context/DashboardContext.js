import React, { useRef } from "react";
import { useState } from "react";

export const DashboardContext = React.createContext();

const DashboardContextProvider = (props) => {
  const [direction, setDirection] = useState({
    direction: "no direction",
    direction2: "plus",
  });

  const handleDirection = (props) => {
    setDirection({ ...direction, direction: props });
    console.log("HULA HIULA HULA", props);
  };

  return (
    <DashboardContext.Provider
      value={{ ...direction, handleDirection: handleDirection }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;

import { useEffect } from "react";

const useTradingViewSpeedometer = (url) => {
  useEffect(() => {
    const script = document.createElement("script");
    const widgetDiv = document.getElementById("speedometer");
    const INPUT_OBJ = {
      interval: "1m",
      width: "250",
      isTransparent: "true",
      height: "380",
      symbol: "KRAKEN:XBTUSD",
      showIntervalTabs: "true",
      locale: "de_DE",
      colorTheme: "dark",
    };

    script.src = url;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify(INPUT_OBJ);
    widgetDiv.appendChild(script);

    // return () => {
    //   widgetDiv.removeChild(script);
    // };
  }, [url]);
};

export default useTradingViewSpeedometer;

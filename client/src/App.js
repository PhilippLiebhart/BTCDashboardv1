//import "./App.scss";
import GlobalStyle from "./styles/GlobalStyles";
import { Switch, Route } from "react-router-dom";

import Dashboardpage from "./pages/DashboardPage";
import MarketCapPage from "./pages/MarketCapPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";
import TradingViewChart from "./components/Dashboard/TradingViewChart";
import TradingViewSpeedometer from "./components/Dashboard/TradingViewSpeedometer";

function App() {
  return (
    <Layout>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboardpage} />
        <Route exact path="/coinMarketCap" component={MarketCapPage} />
        <Route exact path="/tradingView" component={TradingViewChart} />
        <Route
          path="/tradingViewSpeed"
          exact
          component={TradingViewSpeedometer}
        />
      </Switch>
    </Layout>
  );
}

export default App;

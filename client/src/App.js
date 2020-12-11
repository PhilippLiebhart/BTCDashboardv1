//import "./App.scss";
import GlobalStyle from "./styles/GlobalStyles";
import { Switch, Route } from "react-router-dom";

import Dashboardpage from "./pages/DashboardPage";
import MarketCapPage from "./pages/MarketCapPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";
import TradingViewChart from "./components/Dashboard/TradingViewChart";

function App() {
  return (
    <Layout>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Dashboard" exact component={Dashboardpage} />
        <Route path="/coinMarketCap" exact component={MarketCapPage} />
        <Route path="/tradingView" exact component={TradingViewChart} />
      </Switch>
    </Layout>
  );
}

export default App;

//import "./App.scss";
import GlobalStyle from "./styles/GlobalStyles";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboardpage from "./pages/DashboardPage";
import MarketCapPage from "./pages/MarketCapPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";
import TradingViewPage from "./pages/TradingViewPage";
import TradingViewSpeedometer from "./components/Dashboard/TradingViewSpeedometer";
import BTCDash404Page from "./pages/BTCDash404Page";

const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  coinMarketCap: "/coinMarketCap",
  tradingView: "/tradingView",
  settings: "/settings",
};

function App() {
  return (
    <Layout>
      <GlobalStyle />

      <Switch>
        <Route exact path={ROUTES.home} component={Homepage} />
        <Route exact path={ROUTES.dashboard} component={Dashboardpage} />
        <Route exact path={ROUTES.coinMarketCap} component={MarketCapPage} />
        <Route exact path={ROUTES.tradingView} component={TradingViewPage} />

        <Route
          path="/tradingViewSpeed"
          exact
          component={TradingViewSpeedometer}
        />
        <Route exact path={ROUTES.settings} component={BTCDash404Page} />
        <Route path="/404" component={BTCDash404Page} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  );
}

export default App;

//import "./App.scss";
import GlobalStyle from "./styles/GlobalStyles";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboardpage from "./pages/DashboardPage";
import MarketCapPage from "./pages/MarketCapPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Dashboard" exact component={Dashboardpage} />
        <Route path="/coinMarketCap" exact component={MarketCapPage} />
      </Switch>
    </Layout>
  );
}

export default App;

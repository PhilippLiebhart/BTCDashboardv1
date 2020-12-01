import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Dashboardpage from "./pages/DashboardPage";
import MarketCapPage from "./pages/MarketCapPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";
import Playground from "./components/playground";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Dashboard" exact component={Dashboardpage} />
        <Route path="/MarketCap" exact component={MarketCapPage} />
        <Route path="/Playground" exact component={Playground} />
      </Switch>
    </Layout>
  );
}

export default App;

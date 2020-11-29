import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Dashboardpage from "./pages/DashboardPage";
import Homepage from "./pages/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Dashboard" exact component={Dashboardpage} />
      </Switch>
    </Layout>
  );
}

export default App;

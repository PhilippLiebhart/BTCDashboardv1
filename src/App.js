import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboardpage from "./pages/DashboardPage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Dashboard" exact component={Dashboardpage} />
      </Switch>
    </div>
  );
}

export default App;

import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Tickercard from "../components/Dashboard/TickerCard";
import { ListBasic as TwitterWidget } from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsfeed from "../components/Dashboard/FinHubNewsfeed";
import Orderbook from "../components/Dashboard/Orderbook";
function Dashboardpage(props) {
  console.log("### DASHBOARDPAGE RENDER ###");
  return (
    <>
      <DashboardWrapper>
        <div className="container-fluid">
          <div className="section  mb-5">
            <DashboardHeader />
          </div>
          <div className="section d-flex flex-wrap justify-content-center mb-5">
            <div>
              {" "}
              <Tickercard />
              <FearAndGreedIndex />
            </div>

<<<<<<< HEAD
            <FinhubNewsfeed />
=======
            <FinHubNewsfeed />
>>>>>>> 4a43f024d61ce972da9b694afae5dbb515581d58

            <TwitterWidget />
            <Orderbook />
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}

Dashboardpage.propTypes = {};

export default Dashboardpage;

const DashboardWrapper = styled.div`
  .section {
    margin: 20px 0 20px 0;
  }
`;

const TwitterWidgetWrapper = styled.div`
  height: fit-content;
  margin: 0 auto;
  width: fit-content;

  .timeline-Widget {
    margin: 0 auto !important;
  }
`;

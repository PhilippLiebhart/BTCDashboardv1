import styled from "styled-components";
import GridLayout from "react-grid-layout";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TwitterWidget from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsfeed from "../components/Dashboard/FinHubNewsfeed";
import TickerWIdget from "../components/Dashboard/TickerWidget";
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
              <TickerWIdget />
              <FearAndGreedIndex />
            </div>

            <FinHubNewsfeed />

            <TwitterWidget />
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

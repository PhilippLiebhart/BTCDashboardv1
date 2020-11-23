import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Finhubnewsfeed from "../components/Dashboard/FinhubNewsfeed";
import Tickercard from "../components/Dashboard/TickerCard";
import { ListBasic as TwitterWidget } from "../components/Dashboard/TwitterWidget";
function Dashboardpage(props) {
  return (
    <>
      <DashboardWrapper>
        <div className="container-fluid">
          <div className="section  mb-5">
            <DashboardHeader />
          </div>
        </div>
        <div className="section d-flex flex-wrap justify-content-center">
          <Tickercard />
        </div>
        <div className="section">
          <div className="container  d-flex flex-wrap">
            <Finhubnewsfeed />
            <TwitterWidgetWrapper>
              <TwitterWidget />
            </TwitterWidgetWrapper>
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
  margin: 0 auto;
  width: fit-content;

  .timeline-Widget {
    margin: 0 auto !important;
  }
`;

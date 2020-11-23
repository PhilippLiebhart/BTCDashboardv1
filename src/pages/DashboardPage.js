import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Finhubnewsfeed from "../components/Dashboard/FinHubNewsfeed";
import Tickercard from "../components/Dashboard/TickerCard";
import { ListBasic as TwitterWidget } from "../components/Dashboard/TwitterWidget";
function Dashboardpage(props) {
  return (
    <>
      <DashboardWrapper>
        <div className="container-fluid">
          <div className="section">
            <DashboardHeader />
          </div>
          <div className="section d-flex flex-wrap justify-content-center">
            <Tickercard />
            <Tickercard />
          </div>
        </div>
        <div className="section">
          <TwitterWidgetWrapper>
            <TwitterWidget />
          </TwitterWidgetWrapper>
        </div>
        <div className="section">
          <Finhubnewsfeed />
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

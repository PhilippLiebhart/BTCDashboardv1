import PropTypes from "prop-types";
import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Tickercard from "../components/Dashboard/TickerCard";
import { ListBasic as TwitterWidget } from "../components/Dashboard/TwitterWidget";

function Dashboardpage(props) {
  return (
    <>
      <div class="container-fluid">
        <DashboardHeader />
        <div class="d-flex flex-wrap justify-content-center">
          <Tickercard />
        </div>
      </div>
      <TwitterWidgetWrapper>
        <TwitterWidget />
      </TwitterWidgetWrapper>
    </>
  );
}

Dashboardpage.propTypes = {};

export default Dashboardpage;

const TwitterWidgetWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

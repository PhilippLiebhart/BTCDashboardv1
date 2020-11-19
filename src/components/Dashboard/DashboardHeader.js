import PropTypes from "prop-types";
import styled from "styled-components";
import chartSample from "../../assets/img/chart-sample.svg";
import averageSymbol from "../../assets/img/symbol-average.svg";

function Dashboardheader(props) {
  return (
    <>
      <DashboardheaderWrapper>
        <div className="row align-items-center">
          <div className="col ml-auto text-right">
            <img
              src={averageSymbol}
              style={{ marginBottom: "15px" }}
              width="25px"
              alt=""
            />

            <h1 className="h1 d-inline ml-2">21540 $</h1>
          </div>
          <div className="col text-left">
            <p className="header--24h">24h Volume: 200.3 mio</p>
            <p className="header--24h">24h biggest Order: 2.3 mio</p>
            <p className="header--24h">24h low: 18900 $</p>
            <p className="header--24h">24h high: 22500 $</p>
          </div>
          <div className="col mr-auto">
            {" "}
            <img
              src={chartSample}
              alt=""
              height="60px"
              width="100%"
              style={{ padding: 0 }}
            />
          </div>
        </div>
      </DashboardheaderWrapper>
    </>
  );
}

Dashboardheader.propTypes = {};

export default Dashboardheader;

const DashboardheaderWrapper = styled.div`
  height: 100px;
  padding-top: 20px;
  margin-bottom: 40px;
  color: white;
  .header--24h {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;

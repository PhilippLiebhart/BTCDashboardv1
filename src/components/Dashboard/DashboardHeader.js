import PropTypes from "prop-types";
import styled from "styled-components";
import chartSample from "../../assets/img/chart-sample.svg";
import averageSymbol from "../../assets/img/symbol-average.svg";

function Dashboardheader(props) {
  return (
    <>
      <DashboardheaderWrapper>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-6">
              <img
                src={averageSymbol}
                style={{ marginBottom: "15px" }}
                width="25px"
                alt=""
              />
              <h1 className="h1 d-inline ml-2">21540$</h1>
            </div>
            <div className="col-md-4 col-sm-6">
              <p className="header--24h">Volume: 200.3 mio</p>
              <p className="header--24h">Biggest Order: 2.3 mio</p>
              <p className="header--24h">Low/High: 18900/22500 $</p>
            </div>
            <div className="col-md-4 col-sm-6">
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
        </div>
      </DashboardheaderWrapper>
    </>
  );
}

Dashboardheader.propTypes = {};

export default Dashboardheader;

const DashboardheaderWrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 40px;
  color: var(--secondary);
  .header--24h {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;

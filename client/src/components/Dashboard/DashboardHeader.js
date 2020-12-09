import styled from "styled-components";
import chartSample from "../../assets/img/chart-sample.svg";
import averageSymbol from "../../assets/img/symbol-average.svg";

const Dashboardheader = (props) => {
  return (
    <DashboardheaderWrapper>
      <AveragePrice className="header__item">
        <img
          src={averageSymbol}
          style={{ display: "inline" }}
          width="25px"
          alt=""
        />
        <h1 className="primary">{props.averagePrice}</h1>
      </AveragePrice>

      <div className="header__item">
        <p className="header--24h">Volume: 200.3 mio</p>
        <p className="header--24h">Biggest Order: 2.3 mio</p>
        <p className="header--24h">Low/High: 18900/22500 $</p>
      </div>
      <div className="header__item">
        <img
          src={chartSample}
          alt=""
          height="60px"
          width="100%"
          style={{ padding: 0 }}
        />
      </div>
    </DashboardheaderWrapper>
  );
};

export default Dashboardheader;

const AveragePrice = styled.div`
  display: flex;
`;

const DashboardheaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--secondary);

  .header__item {
    margin: 15px;
  }
  .header--24h {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

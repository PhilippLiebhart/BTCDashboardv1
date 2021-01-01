import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import homeIcon from "../../assets/navItems/homeIcon.png";
import settingsIcon from "../../assets/navItems/settingsIcon.png";
import coinmarketIcon from "../../assets/navItems/coinmarketIcon.png";
import chartIcon from "../../assets/navItems/chartIcon.png";

const MobileNav = (props) => {
  return (
    <>
      <MobileNavWrapper className="widget--base">
        <NavLink to="/">
          <img src={homeIcon} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to="dashboard">
          <img src={logo} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to="tradingView">
          <img src={chartIcon} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to="coinMarketCap">
          <img src={coinmarketIcon} width="40px" alt="" className="src" />
        </NavLink>
      </MobileNavWrapper>
    </>
  );
};

export default MobileNav;

const MobileNavWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  height: 65px;
  padding: 5px;

  border-radius: 30px 30px 0 0;
  box-shadow: 0px -0px 30px rgba(0, 0, 0, 0.3);
  z-index: 999;
  bottom: 0%;

  background-color: var(--dashBgDark);
`;

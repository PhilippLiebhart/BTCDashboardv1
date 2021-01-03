import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import homeIcon from "../../assets/navItems/homeIcon.png";
import coinmarketIcon from "../../assets/navItems/coinmarketIcon.png";
import feedbackIcon from "../../assets/navItems/feedbackIcon.png";
import chartIcon from "../../assets/navItems/chartIcon.png";

const ROUTE_NAMES = {
  home: "/home",
  dasboard: "/dashboard",
  tradingView: "/tradingView",
  coinMarketCap: "/coinMarketCap",
  feedback: "/feedback",
};

const MobileNav = (props) => {
  return (
    <>
      <MobileNavWrapper className="widget--base">
        <NavLink to={ROUTE_NAMES.home} activeClassName="activeLink">
          <img src={homeIcon} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to={ROUTE_NAMES.dasboard} activeClassName="activeLink">
          <img src={logo} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to={ROUTE_NAMES.tradingView} activeClassName="activeLink">
          <img src={chartIcon} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to={ROUTE_NAMES.coinMarketCap} activeClassName="activeLink">
          <img src={coinmarketIcon} width="40px" alt="" className="src" />
        </NavLink>
        <NavLink to={ROUTE_NAMES.feedback} activeClassName="activeLink">
          <img src={feedbackIcon} width="40px" alt="" className="src" />
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

  height: fit-content;
  padding: 0;

  border-radius: 30px 30px 0 0;
  box-shadow: 0px -0px 30px rgba(0, 0, 0, 0.3);
  z-index: 999;
  bottom: 0%;

  background-color: var(--dashBgDark);

  img {
    padding: 15px 10px 10px 10px;
  }
  .activeLink {
    box-shadow: inset 0px -0px 30px rgba(0, 0, 0, 0.2);
  }
`;

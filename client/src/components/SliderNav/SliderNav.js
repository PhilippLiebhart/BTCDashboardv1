import { withRouter } from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
  ClickOutside,
} from "@trendmicro/react-sidenav";

import styled from "styled-components";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import homeIcon from "/Users/philos/Documents/_REACT_PROJECT/_APPs/_ My Apps/BTC-Dashboard-v1/client/src/assets/navItems/homeIcon.png";
import settingsIcon from "/Users/philos/Documents/_REACT_PROJECT/_APPs/_ My Apps/BTC-Dashboard-v1/client/src/assets/navItems/settingsIcon.png";
import coinmarketIcon from "/Users/philos/Documents/_REACT_PROJECT/_APPs/_ My Apps/BTC-Dashboard-v1/client/src/assets/navItems/coinmarketIcon.png";
import chartIcon from "/Users/philos/Documents/_REACT_PROJECT/_APPs/_ My Apps/BTC-Dashboard-v1/client/src/assets/navItems/chartIcon.png";

const SliderNav = ({ location, history }) => {
  const [navState, setNavState] = useState({ expanded: true });

  return (
    <SliderNavWrapper>
      <SideNav
        onSelect={(selected) => {
          const to = "/" + selected;
          if (location.pathname !== to) {
            history.push(to);
            setNavState({ expanded: false });
          }
        }}
        expanded={navState.expanded}
      >
        <SideNav.Toggle
          onClick={() => setNavState({ expanded: !navState.expanded })}
        />
        <SideNav.Nav defaultSelected="/">
          <NavItem
            eventKey=""
            active={location.pathname === "/" ? true : false}
          >
            <NavIcon>
              <img src={homeIcon} width="40px" alt="" className="src" />
            </NavIcon>
            <NavText>
              <p className="nav-text">Home</p>
            </NavText>
          </NavItem>
          <NavItem
            eventKey="dashboard"
            active={location.pathname === "/Dashboard" ? true : false}
          >
            <NavIcon>
              <img src={logo} width="40px" alt="" className="src" />
            </NavIcon>
            <NavText>
              <p className="nav-text">Dashboard</p>
            </NavText>
          </NavItem>
          <NavItem
            eventKey="tradingView"
            active={location.pathname === "/tradingView" ? true : false}
          >
            <NavIcon>
              <img src={chartIcon} width="40px" alt="" className="src" />
            </NavIcon>
            <NavText>
              <p className="nav-text">Chart</p>
            </NavText>
          </NavItem>
          <NavItem
            eventKey="coinMarketCap"
            active={location.pathname === "/coinMarketCap" ? true : false}
          >
            <NavIcon>
              <img src={coinmarketIcon} width="40px" alt="" className="src" />
            </NavIcon>
            <NavText>
              <p className="nav-text">Coin Market Cap</p>
            </NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <img src={settingsIcon} width="40px" alt="" className="src" />
            </NavIcon>

            <NavText>
              <p className="nav-text">Settings</p>
            </NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Profile</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Exchanges</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </SliderNavWrapper>
  );
};

const SliderNavWrapper = styled.div`
  align-items: center;
  font-weight: 600;

  width: 100%;
  height: fit-content;
  .nav-text {
    margin-left: 70px !important;
  }
  img {
    width: 60%;
    vertical-align: middle;
  }
`;

export default withRouter(SliderNav);

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

const SliderNav = () => {
  const [navState, setNavState] = useState({ expanded: true });

  return (
    <>
      <SliderNavWrapper>
        <SideNav
          onSelect={(selected) => {
            setNavState({ expanded: false });
          }}
          expanded={navState.expanded}
        >
          <SideNav.Toggle
            onClick={() => setNavState({ expanded: !navState.expanded })}
          />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <NavLink to="/" className="">
                  <img src={homeIcon} width="40px" alt="" className="src" />
                </NavLink>
              </NavIcon>
              <NavText>
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="dashboard">
              <NavIcon>
                <NavLink to="/dashboard" className="">
                  <img src={logo} width="40px" alt="" className="src" />
                </NavLink>
              </NavIcon>
              <NavText>
                <NavLink to="/dashboard" className="">
                  Dashboard
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="coinMarketCap">
              <NavIcon>
                <NavLink to="/coinMarketCap" className="">
                  <img
                    src={coinmarketIcon}
                    width="40px"
                    alt=""
                    className="src"
                  />
                </NavLink>
              </NavIcon>
              <NavText>
                <NavLink to="/coinMarketCap" className="">
                  Coin Market Cap
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <img src={settingsIcon} width="40px" alt="" className="src" />
              </NavIcon>

              <NavText>Settings</NavText>
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
    </>
  );
};

const SliderNavWrapper = styled.div`
  align-items: center;

  .xx {
    border: 1px solid red;
    align-items: center;
  }
  img {
    width: 60%;
    vertical-align: middle;
  }
`;

export default SliderNav;

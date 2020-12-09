import React from "react";
import { NavLink } from "react-router-dom";
import "./sideNav.css";
import logo from "../../assets/img/logo.svg";

class SideNav extends React.Component {
  state = {
    state: {
      showNav: false,
    },
  };

  openNavClick = (e) => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = (e) => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true,
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false,
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = (e) => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "250px" : "0" };

    return (
      <>
        <span onClick={this.openNavClick} class="open-nav">
          &#9776; open
        </span>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div className="navbar--left">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          <h3>BTCDASH</h3>
        </div>
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>

          <img src={logo} width="40" height="40" alt="" />
          <NavLink to="/" className="nav-item nav-link">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink to="/Dashboard" className="nav-item nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/MarketCap" className="nav-item nav-link">
            MarketCap
          </NavLink>
        </div>
      </>
    );
  }
}

export default SideNav;

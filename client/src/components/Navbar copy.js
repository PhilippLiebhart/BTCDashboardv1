import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

function Navbar(props) {
  return (
    <>
      <NavWrapper>
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

        <div className="navbar--right">
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
      </NavWrapper>
    </>
  );
}

export default Navbar;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  color: var(--primary);
  font-size: 1rem;

  border: 1px solid red;

  .navbar--left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .navbar--right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: end;
  }
`;

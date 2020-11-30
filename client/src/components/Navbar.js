import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark bg-transparent">
        <div className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          BTCDASH
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </NavLink>
            <NavLink to="/Dashboard">
              <a className="nav-item nav-link" href="#">
                Dashboard
              </a>
            </NavLink>
            <a className="nav-item nav-link" href="#">
              News
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Trading
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

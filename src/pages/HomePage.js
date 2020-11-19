import PropTypes from "prop-types";
import logo from "../assets/img/logo.svg";

function Homepage(props) {
  return (
    <>
      <header className="App-header pb-5">
        <img src={logo} className="App-logo" alt="logo" width="200px" />
        <h1 class="h6 pt-4 text-white">BTCDASH</h1>
      </header>
    </>
  );
}

Homepage.propTypes = {};

export default Homepage;

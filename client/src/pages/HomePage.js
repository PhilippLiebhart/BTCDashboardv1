import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";

function Homepage(props) {
  return (
    <>
      <div className="container">
        <div className="jumbotron p-5 mt-5">
          <div className="row">
            <div className="col">
              {" "}
              <h1 clasName="display-4">Welcome to</h1>
              <h1 className="display-3 font-weight-bold text-primary">
                BTCDASH
              </h1>
              <p className="lead">create your own custom BTCDASH.</p>
              <hr className="my-4" />
            </div>
            <div className="col">
              {" "}
              <IntroScreen>
                <div className="IntroScreen pb-5">
                  <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    width="200px"
                  />
                </div>
              </IntroScreen>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Homepage.propTypes = {};

export default Homepage;

const IntroScreen = styled.div`
  color: var(--secondary);

  .App-logo {
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

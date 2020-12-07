import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";

function Homepage(props) {
  return (
    <>
      <HomePageWrapper>
        <div className="introCard">
          <div className="card--left">
            <h1 clasName="">Welcome to</h1>
            <h1 className="">BTCDASH</h1>
            <p className="">create your own custom BTCDASH.</p>
            <hr />
          </div>
          <IntroLogo>
            <img src={logo} className="App-logo" alt="logo" width="200px" />
          </IntroLogo>
        </div>
      </HomePageWrapper>
    </>
  );
}

Homepage.propTypes = {};

export default Homepage;

const HomePageWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--bgDashDark);

  .introCard {
    display: flex;
    flex-direction: row;
    padding: 100px;
    background-color: var(--dashWidgetBgDark);
  }

  .introText {
    border: 1px solid red;
    margin-right: 50px;
  }
`;

const IntroLogo = styled.div`
  background-color: var(--dashWidgetBgDark);

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

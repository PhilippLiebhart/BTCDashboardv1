import styled from "styled-components";
import logo from "../assets/img/logo.svg";

function Homepage(props) {
  return (
    <>
      <HomePageWrapper>
        <div className="introCard">
          <div className="card--left">
            <h1 className="headline">Welcome to</h1>
            <h1 className="App--name">BTCDASH</h1>
            <p className="subline">Your BTC Dashboard...</p>
            <hr />
          </div>
          <IntroLogo>
            <img src={logo} className="App-logo" alt="logo" width="200px" />
          </IntroLogo>
        </div>
        <div className="homePageGrid">
          <div className="homePageGrid-item">
            <h1 className="headline">Dashboard</h1>
            <h2 className="subline">link</h2>
          </div>
          <div className="homePageGrid-item">
            <h1 className="headline">Coin Market</h1>
            <h2 className="subline">link</h2>
          </div>
          <div className="homePageGrid-item">
            <h1 className="headline">Settings</h1>
            <h2 className="subline">link</h2>
          </div>
          <div className="homePageGrid-item">
            <h1 className="headline">FAQ</h1>
            <h2 className="subline">link</h2>
          </div>
        </div>
      </HomePageWrapper>
    </>
  );
}

export default Homepage;

const HomePageWrapper = styled.div`
  height: 80vh;
  width: fit-content;
  margin: 5% auto;

  /* background-color: var(--dashWidgetBgDark); */
  color: var(--primary);

  .introCard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: center;
    align-items: center;

    background-color: var(--dashWidgetBgDark);
    padding: 26px 16px 16px 16px;
    border-radius: 10px;
  }

  .card--left {
    line-height: 0.5rem;

    .App--name {
      font-weight: 900;
      font-size: 6rem;
    }
  }
  .headline {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--secondary);
  }
  .subline {
    color: var(--secondary);
    font-weight: 400;
    font-size: 1.2rem;
  }

  .homePageGrid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: space-evenly;
    align-items: center;
    line-height: 0.5rem;
    text-align: center;

    .homePageGrid-item {
      padding: 16px 16px 16px 16px;
      border-radius: 10px;
      background-color: var(--dashBgDark);
      margin: 10px;
    }
  }
`;

const IntroLogo = styled.div`
  background-color: var(--dashWidgetBgDark);
  padding: 20px;
  margin-left: 50px;

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

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
            <p className="subline">create your own custom BTCDASH.</p>
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

export default Homepage;

const HomePageWrapper = styled.div`
  height: 80vh;
  width: 100%;

  background-color: var(--bgDashDark);
  color: var(--primary);

  .introCard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: center;
    align-items: center;
    margin: 5% auto;

    background-color: var(--dashWidgetBgDark);
    padding: 26px 16px 16px 16px;
    border-radius: 10px;
  }

  .card--left {
    font-weight: 800;
    line-height: 0.5rem;

    .App--name {
      font-weight: 800px;
      font-size: 3rem;
    }
    .headline {
      font-weight: 800px;
      font-size: 1.5rem;
      color: var(--secondary);
    }
    .subline {
      color: var(--secondary);
      font-weight: 300;
      font-size: 0.8rem;
    }
  }
`;

const IntroLogo = styled.div`
  background-color: var(--dashWidgetBgDark);
  padding: 20px;

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

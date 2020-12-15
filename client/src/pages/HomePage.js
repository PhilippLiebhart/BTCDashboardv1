import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import logoText from "../assets/img/logo_text.svg";

import HomePageCard from "../components/HomePageCard";

function Homepage() {
  return (
    <>
      <HomePageWrapper>
        <div className="homePageGrid">
          <HomePageCard headline={"Dashboard"} linkURL={"/Dashboard"} />
          <HomePageCard headline={"Coin Market"} linkURL={"/coinMarketCap"} />
          <HomePageCard headline={"Chart"} linkURL={"/tradingView"} />

          <HomePageCard headline={"FAQ"} linkURL={"/faq"} />
        </div>

        <div className="introCard">
          <div className="card--left">
            <h1 className="headline">Welcome to</h1>
            <img src={logoText} className="logo-Text" alt="btc dash" />
            <p className="subline">Your BTC Dashboard...</p>
            <hr />
          </div>
          <IntroLogo>
            <img src={logo} className="App-logo" alt="logo" />
          </IntroLogo>
        </div>
      </HomePageWrapper>
    </>
  );
}

export default Homepage;

const HomePageWrapper = styled.div`
  width: 100%;
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

    padding: 26px 16px 16px 16px;
    border-radius: 10px;
  }

  .card--left {
    line-height: 0.5rem;
    width: 370px;

    .logo-Text {
      width: 100%;
    }
  }
  .headline {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .subline {
    font-weight: 400;
    font-size: 1.2rem;
  }

  .homePageGrid {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0 auto;
    justify-content: space-evenly;
    text-align: center;

    .homePageGrid-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      border-radius: 10px;
      background-color: var(--dashBgDark);
      height: 50px;
      margin: 5px;

      h1,
      h3 {
        font-size: 0.9rem;
        padding: 0;
        margin: 0;
      }
    }
    .homePageGrid-item:hover {
      border: 1px solid var(--secondary);
      background-color: var(--primary);
      color: var(--dashWidgetBgDarker);
      transform: scale(0.95);
      transition: all ease 900ms;
    }
  }
`;

const IntroLogo = styled.div`
  /* background-color: var(--dashWidgetBgDark); */
  padding: 20px;
  width: 370px;
  pointer-events: none;
  
  img {
   width: 100%;
  }

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

import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import logoText from "../assets/img/logo_text.svg";

import HomePageCard from "../components/HomePageCard";

function Homepage(props) {
  return (
    <>
      <HomePageWrapper>
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
        <div className="homePageGrid">
          <HomePageCard
            headline={"Dashboard"}
            linkText="link to Dashboard"
            linkURL={"/Dashboard"}
          />
          <HomePageCard
            headline={"Coin Market"}
            linkText="link to Coin Market"
            linkURL={"/coinMarketCap"}
          />

          <HomePageCard
            headline={"FAQ"}
            linkText="link to FAQ"
            linkURL={"/faq"}
          />
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

    /* background-color: var(--dashWidgetBgDark); */
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
    color: var(--secondary);
  }
  .subline {
    color: var(--secondary);
    font-weight: 400;
    font-size: 1.2rem;
  }

  .homePageGrid {
    align-items: center;
    line-height: 0.5rem;
    text-align: center;

    .homePageGrid-item {
      padding: 16px 16px 16px 16px;
      border-radius: 10px;
      background-color: var(--dashBgDark);
      margin: 10px;
      height: 50px;
    }
    .homePageGrid-item:hover {
      border: 1px solid var(--primary);
      padding: 18px 18px 18px 18px;
      height: 70px;
      transition: 0.3s ease;
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

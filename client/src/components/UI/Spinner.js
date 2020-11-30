import styled from "styled-components";
import "./Spinner.css";

export default function Spinner(props) {
  return (
    <>
      {/* <h1 className="PULSE h6 text-center">Finhub News loading</h1> */}
      <SpinnerWrap>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </SpinnerWrap>
    </>
  );
}

const SpinnerWrap = styled.div`
  margin: 0 auto;
  width: fit-content;

  // SPINNER
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid var(--primary);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

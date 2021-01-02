import styled from "styled-components";

const DisplaySettingsMenu = ({
  saveToLs,
  displaySettings,
  handleDisplaySettings,
  reset,
}) => {
  return (
    <DashboardFilterWrapper>
      <label class="switch">
        <input type="checkbox" id="expand" />
        <span class="slider"></span>
        <div id="menuItemsWrapper">
          <DisplayButton onClick={() => reset()}>Reset Layout</DisplayButton>
          {Object.entries(displaySettings).map(([key, val]) => {
            return (
              <DisplayButton
                key={key}
                displaySetting={!val}
                onClick={() => handleDisplaySettings(key)}
                className="widget--base"
              >
                {key}
              </DisplayButton>
            );
          })}
        </div>
      </label>
    </DashboardFilterWrapper>
  );
};

const DashboardFilterWrapper = styled.div`
  font-size: 0.8rem !important;
  position: relative;
  top: 10px;
  left: 12px;

  /* SHOW / HIDE MENU */

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;

    width: 40px;
    height: 22px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 60px;
    height: 0;
  }

  #menuItemsWrapper {
    position: relative;
    z-index: 1000;
    border: 2px solid var(--dashWidgetBgDark);
    background: var(--dashWidgetBgDarker);
    border-radius: 10px;
    width: fit-content;
    display: grid;
    flex-wrap: wrap;
    margin-left: 70px;
    padding: 8px 8px;

    opacity: 0;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-100%);
    transition: visibility 0s linear 0.33s, opacity 0.33s linear,
      transform 0.3s ease;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #008b8b;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    border-radius: 9px;
    height: 18px;
    width: 18px;
    left: 2px;
    top: 2px;
    background-color: #ff8c00;

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #expand:checked ~ #menuItemsWrapper {
    visibility: visible;
    opacity: 1;

    transform: translateY(0%);
    transition-delay: 0.05s;
  }

  #expand:checked + .slider {
    background-color: rgb(0, 0, 0, 0.4);
    transform: rotate(90deg);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    border-radius: 50%;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(17px);
  }
`;

const DisplayButton = styled.button`
  font-size: 0.8rem !important;
  margin: 4px;
  color: ${(props) =>
    props.displaySetting ? "var(--dashWidgetBgDark)" : "var(--secondary)"};
  border: 1px solid var(--primary);
  background-color: ${(props) =>
    props.displaySetting ? "var(--primary)" : "var(--dashWidgetBgDark)"};

  :focus {
    outline: 0;
  }
`;

export default DisplaySettingsMenu;

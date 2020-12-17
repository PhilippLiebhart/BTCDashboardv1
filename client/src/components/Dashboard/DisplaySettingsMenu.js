import styled from "styled-components";

const DisplaySettingsMenu = ({
  saveToLs,
  displaySettings,
  handleDisplaySettings,
}) => {
  return (
    <DashboardFilter>
      <button onClick={saveToLs}>SAVE settings</button>
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
    </DashboardFilter>
  );
};

const DashboardFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;
  font-size: 0.8rem !important;
`;

const DisplayButton = styled.button`
  display: flex;

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

import styled from "styled-components";

const DisplaySettingsMenu = ({
  saveToLs,
  displaySettings,
  handleDisplaySettings,
}) => {
  return (
    <DashboardFilter>
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

const Button = styled.button`
  background-color: var(--primary);
  border-radius: 10px;
  border: 1px solid var(--secondary);
  outline: 0;

  :active {
    background-color: var(--dashWidgetBgDark);
    color: white;
  }
`;

export default DisplaySettingsMenu;

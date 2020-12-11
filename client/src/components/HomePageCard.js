import { NavLink } from "react-router-dom";

const HomePageCard = ({ linkURL, linkText, headline }) => {
  return (
    <NavLink to={linkURL}>
      <div className="homePageGrid-item">
        <h1 className="headline">{headline}</h1>
        <h2 className="subline">{linkText}</h2>
      </div>
    </NavLink>
  );
};

export default HomePageCard;

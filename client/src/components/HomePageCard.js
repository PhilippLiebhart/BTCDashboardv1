import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

const HomePageCard = ({ linkURL, headline }) => {
  return (
    <NavLink to={linkURL}>
      <div className="homePageGrid-item">
        <h1 className="headline">{headline}</h1>
      </div>
    </NavLink>
  );
};

HomePageCard.propTypes = {
  linkURL: PropTypes.string,
  headline: PropTypes.string,
};

export default HomePageCard;

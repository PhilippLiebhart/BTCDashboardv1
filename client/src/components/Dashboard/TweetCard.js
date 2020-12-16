import PropTypes from "prop-types";

import styled from "styled-components";

const TweetCard = ({ user, userName, text, tweetId, tweetTime }) => {
  return (
    <TweetCardWrapper>
      <a
        href={`https://twitter.com/${userName}/status/${tweetId}`}
        alt="Link to tweet"
        target="blank"
      >
        <small className="primary font-weight-bold">{user} </small>
        <small className="primary">
          {parseTwitterDate(tweetTime).toString()}
        </small>

        <p className="pm-0">{text}</p>
      </a>
    </TweetCardWrapper>
  );
};

export default TweetCard;

const TweetCardWrapper = styled.div`
  padding: 0 16px 0 16px;

  p {
    font-size: 0.9rem;
  }
  font-size: 0.8rem;
  small {
    margin-bottom: 3px;
    font-size: 0.7rem;
  }
`;

function parseTwitterDate(tweetDate) {
  let system_date = new Date(Date.parse(tweetDate));
  let user_date = new Date();
  if (K.ie) {
    system_date = Date.parse(tweetDate.replace(/( \+)/, " UTC$1"));
  }
  let diff = Math.floor((user_date - system_date) / 1000);
  if (diff <= 1) {
    return "just now";
  }
  if (diff < 20) {
    return diff + " seconds ago";
  }
  if (diff < 40) {
    return "half a minute ago";
  }
  if (diff < 60) {
    return "less than a minute ago";
  }
  if (diff <= 90) {
    return "one minute ago";
  }
  if (diff <= 3540) {
    return Math.round(diff / 60) + " minutes ago";
  }
  if (diff <= 5400) {
    return "1 hour ago";
  }
  if (diff <= 86400) {
    return Math.round(diff / 3600) + " hours ago";
  }
  if (diff <= 129600) {
    return "1 day ago";
  }
  if (diff < 604800) {
    return Math.round(diff / 86400) + " days ago";
  }
  if (diff <= 777600) {
    return "1 week ago";
  }
  return "on " + system_date;
}
// from http://widgets.twimg.com/j/1/widget.js
let K = (function () {
  let a = navigator.userAgent;
  return {
    ie: a.match(/MSIE\s([^;]*)/),
  };
})();

TweetCard.propTypes = {
  user: PropTypes.string,
  userName: PropTypes.string,
  text: PropTypes.string,
  tweetId: PropTypes.string,
  tweetTime: PropTypes.string,
};

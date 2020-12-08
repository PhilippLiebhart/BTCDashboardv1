import PropTypes from "prop-types";
import styled from "styled-components";

const FinhubnewsItem = ({ id, headline, summary, url, time }) => {
  let unix_timestamp = time;

  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <FinhubNewsItemWrapper>
      <main>
        <details closed="closed">
          <summary>
            <div className="news-card__header">
              <NewsItemDate>{formattedTime}</NewsItemDate>
              <h6>{headline}</h6>
            </div>
          </summary>
          <div className="news-card__content">
            <p>
              {summary}{" "}
              <a href={url} target="_blank" rel="noopener noreferrer">
                read more...
              </a>
            </p>
          </div>
        </details>
      </main>
    </FinhubNewsItemWrapper>
  );
};

const NewsItemDate = styled.span`
  color: var(--secondary);
  display: inline;
  font-size: 0.8rem;
  font-weight: 400;
  margin-right: 8px;
`;

const FinhubNewsItemWrapper = styled.div`
  padding: 0 16px;
  //border: 1px solid red;
  margin: 10px 0;

  .news-card__header {
    display: inline;
  }
  h6 {
    display: inline;
    margin: 2px 0;
    margin-right: 10px;
    font-weight: 500;
    font-size: 1rem;
  }
  a {
    right: 16px;
    font-size: 0.7rem;
    position: absolute;
    float: right;
    margin: 5px;
  }
  p {
    font-size: 0.8rem;
  }

  summary {
    outline: none;
    cursor: pointer;
    position: relative;
    border-radius: 0.25rem;
  }
  details[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }
  @keyframes sweep {
    0% {
      opacity: 0;
      margin-top: 0px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
  /* details > summary::before {
    position: absolute;
    content: "+";
    left: 0px;
  }
  details[open] > summary::after {
    position: absolute;
    content: "-";
    left: 0px;
  } */
  details[open] > summary::before {
    position: absolute;
    content: "";
    left: 0px;
  }

  details[open] > summary::-webkit-details-marker {
    display: flex;
  }
`;

FinhubnewsItem.propTypes = {};

export default FinhubnewsItem;

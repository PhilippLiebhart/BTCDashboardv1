import PropTypes from "prop-types";
import styled from "styled-components";

import "./FinhubNewsItem.css";

const FinhubnewsItem = ({ id, headline, summary, url, time }) => {
  let unix_timestamp = time;

  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <>
      <main>
        <details closed="closed">
          <summary>
            <div className="card-header">
              <p className="h5 text-primary text-left mb-0">
                <NewsItemDate className="h6 text-secondary small">
                  {formattedTime}
                </NewsItemDate>{" "}
                {headline}
              </p>
            </div>
          </summary>
          <div className="faq__content">
            <div className="card-body text-secondary">
              {summary}
              <h6 className="text-primary text-right mt-1 small">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  read more...
                </a>
              </h6>
            </div>
          </div>
        </details>
      </main>
    </>
  );
};

const NewsItemDate = styled.span`
  font-size: 0.8rem;
`;

FinhubnewsItem.propTypes = {};

export default FinhubnewsItem;

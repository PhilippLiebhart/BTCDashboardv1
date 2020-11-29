import PropTypes from "prop-types";
import styled from "styled-components";

import "./FinhubNewsItemPage.css";

const FinhubnewsItem = ({ id, headline, summary, url, time }) => {
  console.log("TIMEEEEE", time);

  let unix_timestamp = time;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
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

      {/* <div className="card bg-dark mb-1">
        <div className="card-header" id="hula">
          <p className="h5 text-primary text-left mb-0">
            <NewsItemDate className="text-secondary">
              {formattedTime}
            </NewsItemDate>{" "}
            {headline}
          </p>
        </div>

        <div className="card-body">
          {summary}
          <h6 className="text-primary text-right mt-3">
            <a href={url} target="_blank" rel="noopener noreferrer">
              read more...
            </a>
          </h6>
        </div>
      </div> */}
    </>
  );
};

const NewsItemDate = styled.span`
  font-size: 0.8rem;
`;

FinhubnewsItem.propTypes = {};

export default FinhubnewsItem;

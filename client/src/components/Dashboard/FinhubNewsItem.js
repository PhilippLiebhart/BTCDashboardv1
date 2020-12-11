import styled from "styled-components";

const FinhubnewsItem = ({ id, headline, summary, url, time }) => {
  let unixTimestamp = time;

  let date = new Date(unixTimestamp * 1000);
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
    </FinhubNewsItemWrapper>
  );
};

const NewsItemDate = styled.span`
  font-size: 0.8rem;
`;

const FinhubNewsItemWrapper = styled.div`
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
      margin-top: -10px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
  details > summary::before {
    position: absolute;
    content: "+";
    right: 20px;
  }
  details[open] > summary::after {
    position: absolute;
    content: "-";
    right: 20px;
  }
  details[open] > summary::before {
    position: absolute;
    content: "";
    right: 20px;
  }

  details > summary::-webkit-details-marker {
    display: none;
  }
`;

export default FinhubnewsItem;

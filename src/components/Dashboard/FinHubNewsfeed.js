import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFinhubNewsfeed from "../../hooks/useFinhubNewsfeed";
import FinhubnewsItem from "../../pages/FinhubNewsItem";

function Finhubnewsfeed(props) {
  const [finhubNews] = useFinhubNewsfeed();

  console.log("GET NEWS FEEEEEED:", finhubNews);

  const headlineList = finhubNews.slice(0, 5).map((newsItem, index) => {
    return (
      <>
        <FinhubnewsItem
          key={newsItem.id}
          id={newsItem.id}
          headline={newsItem.headline}
          summary={newsItem.summary}
          url={newsItem.url}
          time={newsItem.datetime}
        />
      </>
    );
  });

  return (
    <NewsFeedWrapper>
      <h3 className="h6 text-left">Finhub Crypto News:</h3>
      {finhubNews.length < 1 ? <Spinner /> : headlineList}
    </NewsFeedWrapper>
  );
}

const NewsFeedWrapper = styled.div`
  width: 500px;
`;

Finhubnewsfeed.propTypes = {};

export default Finhubnewsfeed;

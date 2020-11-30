import styled from "styled-components";
import Spinner from "../UI/Spinner";

import useFinhubNewsfeed from "../../hooks/useFinhubNewsfeed";
import FinhubnewsItem from "./FinhubNewsItem";

const Finhubnewsfeed = (props) => {
  const [finhubNews] = useFinhubNewsfeed();

  const headlineList = finhubNews.slice(0, 5).map((newsItem, index) => {
    return (
      <FinhubnewsItem
        key={newsItem.id}
        id={newsItem.id}
        headline={newsItem.headline}
        summary={newsItem.summary}
        url={newsItem.url}
        time={newsItem.datetime}
      />
    );
  });

  return (
    <NewsFeedWrapper>
      <h3 className="h6 text-left">Finhub Crypto News:</h3>
      {finhubNews.length < 1 ? <Spinner /> : headlineList}
    </NewsFeedWrapper>
  );
};

const NewsFeedWrapper = styled.div`
  width: 500px;
  height: fit-content;
  padding: 16px;
  margin: 10px;
  border-radius: 10px;
  text-align: left;

  background-color: var(--dark);
  color: var(--primary);

  hr {
    height: 1px;
    border-color: var(--secondary);
    width: 100%;
    padding: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

Finhubnewsfeed.propTypes = {};

export default Finhubnewsfeed;

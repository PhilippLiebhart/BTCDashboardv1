import styled from "styled-components";
import Spinner from "../UI/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import useFinhubNewsfeed from "../../hooks/useFinhubNewsfeed";
import FinhubnewsItem from "./FinhubNewsItem";
import { useEffect, useState } from "react";

const Finhubnewsfeed = (props) => {
  const [finhubNews] = useFinhubNewsfeed();
  const [currentNews, setCurrentNews] = useState();
  const [currentCount, setCurrentCount] = useState(10);
  const [hasmore, sethasmore] = useState(true);

  useEffect(() => {
    setCurrentNews(finhubNews.slice(0, currentCount));
  }, [finhubNews, currentCount]);

  const loadMoreFunc = () => {
    console.log("l[[[[o]]]]adMoreFunc");
    let newCount = currentCount + 10;
    setCurrentCount(newCount);
    if (currentNews.length > 99) {
      sethasmore(false);
    }
  };

  let headlineList = currentNews?.map((newsItem, index) => {
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
      <InfiniteScroll
        dataLength={currentCount}
        next={loadMoreFunc}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {finhubNews.length < 1 ? <Spinner /> : headlineList}
      </InfiniteScroll>
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

  /* div::-webkit-scrollbar {
    width: 11px;
  }
  div {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--body-bg);
  }
  div::-webkit-scrollbar-track {
    background: var(--body-bg);
  }
  div::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--body-bg);
  } */

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

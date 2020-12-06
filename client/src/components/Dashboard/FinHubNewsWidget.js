import styled from "styled-components";
import Spinner from "../UI/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import useFinhubNewsfeed from "../../hooks/useFinhubNewsfeed";
import FinhubnewsItem from "./FinhubNewsItem";
import { useEffect, useState } from "react";

const FinHubNewsWidget = (props) => {
  const [finhubNews] = useFinhubNewsfeed();
  const [currentNews, setCurrentNews] = useState();
  const [currentCount, setCurrentCount] = useState(10);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setCurrentNews(finhubNews.slice(0, currentCount));
  }, [finhubNews, currentCount]);

  const loadMoreFunc = () => {
    console.log("l[[[[o]]]]adMoreFunc");
    let newCount = currentCount + 10;
    setCurrentCount(newCount);
    if (currentNews.length > 99) {
      sethasMore(false);
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
      <div
        id="scrollableDivFinhub"
        style={{ height: "100%", overflowY: "scroll" }}
      >
        <h3 className="h6 text-left">Finhub Crypto News:</h3>
        <InfiniteScroll
          dataLength={currentCount}
          next={loadMoreFunc}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          //height={510}
          scrollableTarget="scrollableDivFinhub"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {finhubNews.length < 1 ? <Spinner /> : headlineList}
        </InfiniteScroll>
      </div>
    </NewsFeedWrapper>
  );
};

const NewsFeedWrapper = styled.div`
  width: 100%;
  height: 95%;

  padding: 16px 5px 0 16px;

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

export default FinHubNewsWidget;

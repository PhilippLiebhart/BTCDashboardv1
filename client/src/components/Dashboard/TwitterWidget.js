import styled from "styled-components";
import Tweet from "./TweetCard";
import Spinner from "../UI/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import useTwitterDB from "../../hooks/useTwitterDB";
import { useEffect, useState } from "react";

const TwitterWidget = () => {
  const [tweets] = useTwitterDB();
  const [currentTweets, setCurrentTweets] = useState();
  const [currentCount, setCurrentCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setCurrentTweets(tweets?.slice(0, currentCount));
  }, [tweets, currentCount]);

  const loadMoreFunc = () => {
    console.log("l[[[[o]]]]adMoreFunc");
    let newCount = currentCount + 10;
    setCurrentCount(newCount);
    if (currentTweets.length > 99) {
      setHasMore(false);
    }
  };

  const mappedTweets = currentTweets?.map((tweet) => (
    <div key={tweet._id}>
      <Tweet user={tweet.includes.users[0].name} text={tweet.data.text} />
      <hr />
    </div>
  ));

  return (
    <TimelineWrapper>
      <div
        id="scrollableDivTwitter"
        style={{ height: "100%", overflowY: "scroll" }}
      >
        <InfiniteScroll
          dataLength={currentCount}
          next={loadMoreFunc}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          //height={520}
          scrollableTarget="scrollableDivTwitter"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {tweets ? mappedTweets : <Spinner />}
        </InfiniteScroll>
      </div>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  height: 95%;

  border-radius: 10px;
  text-align: left;

  color: var(--primary);

  hr {
    height: 1px;
    border-color: var(--secondary);
    width: 95% !important;
    padding: 0;
    border-bottom: none;
    color: var(--secondary);
    border-left: none;
    border-right: none;
  }
`;

export default TwitterWidget;

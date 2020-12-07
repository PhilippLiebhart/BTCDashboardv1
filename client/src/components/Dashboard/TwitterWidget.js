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
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setCurrentTweets(tweets?.slice(0, currentCount));
  }, [tweets, currentCount]);

  const loadMoreFunc = () => {
    console.log("l[[[[o]]]]adMoreFunc");
    let newCount = currentCount + 10;
    setCurrentCount(newCount);
    if (currentTweets.length > 99) {
      sethasMore(false);
    }
  };

  const mappedTweets = currentTweets?.map((tweet) => (
    <Tweet
      key={tweet._id}
      user={tweet.includes.users[0].name}
      text={tweet.data.text}
    />
  ));

  return (
    <TimelineWrapper>
      <div
        id="scrollableDivTwitter"
        style={{ height: "100%", overflowY: "scroll" }}
      >
        <h3 className="h6 text-left">Twitter Feed:</h3>

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
  width: 100%;
  height: 95%;
  padding: 16px 5px 0 16px;

  border-radius: 10px;
  text-align: left;

  background-color: var(--dark);
  color: var(--primary);
`;

export default TwitterWidget;

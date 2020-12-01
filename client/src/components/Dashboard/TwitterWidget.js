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
  const [hasmore, sethasmore] = useState(true);

  useEffect(() => {
    setCurrentTweets(tweets?.slice(0, currentCount));
  }, [tweets, currentCount]);

  const loadMoreFunc = () => {
    console.log("l[[[[o]]]]adMoreFunc");
    let newCount = currentCount + 10;
    setCurrentCount(newCount);
    if (currentTweets.length > 99) {
      sethasmore(false);
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
      <h3 className="h6 text-left">Twitter Feed:</h3>

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
        {tweets ? mappedTweets : <Spinner />}
      </InfiniteScroll>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  width: 268px;
  padding: 16px;
  margin: 10px;
  height: fit-content;

  border-radius: 10px;
  text-align: left;

  background-color: var(--dark);
  color: var(--primary);
`;

export default TwitterWidget;

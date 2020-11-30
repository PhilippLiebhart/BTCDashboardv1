import styled from "styled-components";
import Tweet from "./TweetCard";
import Spinner from "../UI/Spinner";

import useTwitterDB from "../../hooks/useTwitterDB";

const TwitterWidget = () => {
  const [tweets] = useTwitterDB();

  const mappedTweets = tweets?.map((tweet) => (
    <Tweet
      key={tweet._id}
      user={tweet.includes.users[0].name}
      text={tweet.data.text}
    />
  ));

  return (
    <TimelineWrapper>
      <h3 className="h6 text-left">Twitter Feed:</h3>

      {tweets ? mappedTweets : <Spinner />}
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

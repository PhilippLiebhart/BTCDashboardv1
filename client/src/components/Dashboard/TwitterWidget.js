import styled from "styled-components";

import { Timeline } from "react-twitter-widgets";

export const ListBasic = () => (
  <TimelineWrapper>
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "IvanOnTech",
      }}
      options={{
        theme: "dark",
        width: "350",
        height: "500",
        borderColor: "#00adb5",
      }}
    />
  </TimelineWrapper>
);

const TimelineWrapper = styled.div`
  .timeline-Widget {
    background-color: blue !important;
  }
  .timeline-TweetList-tweet > customisable-border {
    background-color: blue !important;
    color: red !important;
  }
  p {
    color: red !important;
  }
`;

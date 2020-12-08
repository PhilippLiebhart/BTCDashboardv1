import styled from "styled-components";

const TweetCard = ({ user, text }) => {
  return (
    <TweetCardWrapper>
      <small className="secondary">{user}</small>
      <p className="pm-0">{text}</p>
    </TweetCardWrapper>
  );
};

export default TweetCard;

const TweetCardWrapper = styled.div`
  padding: 0 16px 0 16px;
  font-size: 0.8rem;
  small {
    margin-bottom: 3px;
  }
`;

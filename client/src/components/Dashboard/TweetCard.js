import styled from "styled-components";

const TweetCard = ({ user, text }) => {
  return (
    <TweetCardWrapper>
      <small className="text-secondary">{user}</small>
      <p className="small m-0 p-0">{text}</p>
      <hr />
    </TweetCardWrapper>
  );
};

export default TweetCard;

const TweetCardWrapper = styled.div`
  padding: 8px 0 8px 0;

  hr {
    border-color: var(--light);
    padding: 0;
    margin: 0;
  }
`;

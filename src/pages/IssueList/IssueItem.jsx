import { IssueContext } from "@/lib/states/IssueProvider";
import { useContext } from "react";
import styled from "styled-components";
import React from "react";

const IssueItem = React.forwardRef(({ result }, ref) => {
  const { toggleDetail, setToggleDetail, setSelectedIssue } =
    useContext(IssueContext);
  const handleClick = (result) => {
    setToggleDetail((prev) => !prev);
    setSelectedIssue(result);
  };

  const body = (
    <ItemContainer>
      {toggleDetail ? <UserAvatar src={`${result.user.avatar_url}`} /> : null}
      <IssueInfoBox onClick={() => handleClick(result)}>
        <h1>
          #{result.number} {result.title}
        </h1>
        <p>
          작성자: {result.user.login} 작성일: {result.created_at}
        </p>
      </IssueInfoBox>
      <IssueComentBox>코멘트: {result.comments}</IssueComentBox>
    </ItemContainer>
  );

  const content = ref ? <div ref={ref}>{body}</div> : <div>{body}</div>;
  return content;
});

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  margin: 0 auto;
  border-bottom: 1px solid #908989;
  background-color: #fff;
`;

const IssueInfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1rem 1rem 2rem;
  width: 90%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;

  > h1 {
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
  }
  > p {
    width: 100%;
    font-size: 1.5rem;
    color: darkgrey;
  }
`;

const IssueComentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  font-weight: 600;
  font-size: 1.8rem;
  background-color: #e9e7e7;
`;

const UserAvatar = styled.img`
  display: block;
  width: 15%;
  height: 80%;
  padding: 1rem;
  border-radius: 100%;
`;

IssueItem.displayName = "IssueItem";
export default IssueItem;

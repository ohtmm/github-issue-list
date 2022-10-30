import { IssueContext } from "@/lib/states/IssueProvider";
import { useContext } from "react";
import styled from "styled-components";
import React from "react";

export default function IssueItem({ issue }) {
  const { toggleDetail, setToggleDetail, setSelectedIssue } =
    useContext(IssueContext);
  const handleClick = (issue) => {
    setToggleDetail((prev) => !prev);
    setSelectedIssue(issue);
  };
  return (
    <ItemContainer>
      {toggleDetail ? <UserAvatar src={`${issue.user.avatar_url}`} /> : null}
      <IssueInfoBox onClick={() => handleClick(issue)}>
        <h1>
          #{issue.number} {issue.title}
        </h1>
        <p>
          작성자: {issue.user.login}, 작성일: {issue.created_at}
        </p>
      </IssueInfoBox>
      <IssueComentBox>코멘트: {issue.comments}</IssueComentBox>
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  border-bottom: 1px solid #000;
  background-color: #fff;
`;

const IssueInfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1rem 1rem 2rem;
  width: 90%;
  height: 100%;
  border-right: 1px solid #222;
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
  font-size: 1.5rem;
  background-color: lightpink;
`;

const UserAvatar = styled.img`
  display: block;
  width: 15%;
  height: 80%;
  padding: 1rem;
  border-radius: 100%;
`;

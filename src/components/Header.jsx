import { IssueContext } from "@/lib/states/IssueProvider";
import React, { useContext } from "react";
import styled from "styled-components";

export default function Header() {
  const { toggleDetail, setToggleDetail } = useContext(IssueContext);
  return (
    <IssueListHeader>
      Angular / Angular-cli
      {toggleDetail ? (
        <button
          onClick={() => {
            setToggleDetail((prev) => !prev);
          }}
        >
          Home
        </button>
      ) : null}
    </IssueListHeader>
  );
}

const IssueListHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  font-size: 4rem;
  color: #fff;
  font-weight: 800;
  background-color: #a9adfd;

  > button {
    position: absolute;
    right: 2rem;
    font-size: 2rem;
    padding: 1rem 2rem;
    color: #a9adfd;
    font-weight: 600;
    border: none;
    border-radius: 0.8rem;
    background-color: #faefef;
    cursor: pointer;
  }
`;

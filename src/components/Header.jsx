import { IssueContext } from "@/lib/states/IssueProvider";
import React, { useContext } from "react";
import styled from "styled-components";

export default function Header() {
  const { setToggleDetail } = useContext(IssueContext);
  return (
    <IssueListHeader>
      Angular / Angular-cli
      <button
        onClick={() => {
          setToggleDetail((prev) => !prev);
        }}
      >
        go to list
      </button>
    </IssueListHeader>
  );
}

const IssueListHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  font-size: 4rem;
  background-color: lightcoral;

  > button {
    position: absolute;
    right: 2rem;
    font-size: 2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

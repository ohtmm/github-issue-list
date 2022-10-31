import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TopButton from "./components/TopButton";
import { IssueContext } from "./lib/states/IssueProvider";
import IssueDetail from "./pages/IssueDetail/IssueDetail";
import IssueList from "./pages/IssueList/IssueList";

function App() {
  const { toggleDetail } = useContext(IssueContext);
  return (
    <>
      <Container>
        <Header />
        {!toggleDetail ? <IssueList /> : <IssueDetail />}
        <TopButton />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

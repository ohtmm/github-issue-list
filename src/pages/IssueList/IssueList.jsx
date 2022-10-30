import styled from "styled-components";
import IssueItem from "./IssueItem";
import { API } from "@/lib/api/api";
import { IssueContext } from "@/lib/states/IssueProvider";
import React, { useContext, useEffect } from "react";

export default function IssueList() {
  const { issues, setIssues } = useContext(IssueContext);
  useEffect(() => {
    API.getData()
      .then((res) => {
        setIssues(res);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <IssueListLayout>
      <ul>
        {issues.map((issue, idx) => {
          return <IssueItem key={issue.number} idx={idx} issue={issue} />;
        })}
      </ul>
    </IssueListLayout>
  );
}

const IssueListLayout = styled.div``;

import styled from "styled-components";
import IssueItem from "./IssueItem";
import { api } from "@/lib/api/api";
import { IssueContext } from "@/lib/states/IssueProvider";
import React, { useContext, useRef, useState } from "react";
import useGetIssues from "@/lib/hooks/useGetIssues";

export default function IssueList() {
  const { issues, setIssues } = useContext(IssueContext);
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, hasNextPage } = useGetIssues(pageNum);

  const lastIssueRef = useRef();
  if (isError) return <p>Error:{error.message}</p>;

  const content = issues.map((issue, i) => {
    if (issues.lengt === i + 1) {
      <IssueItem ref={lastIssueRef} key={issue.number} idx={i} issue={issue} />;
    }
    return <IssueItem key={issue.number} idx={i} issue={issue} />;
  });

  return (
    <IssueListLayout>
      {content}
      {isLoading && <p>Loading ... </p>}
    </IssueListLayout>
  );
}

const IssueListLayout = styled.div``;

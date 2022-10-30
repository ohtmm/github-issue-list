import styled from "styled-components";
import IssueItem from "./IssueItem";
import { IssueContext } from "@/lib/states/IssueProvider";
import React, { useCallback, useContext, useRef, useState } from "react";
import useGetIssues from "@/lib/hooks/useGetIssues";

export default function IssueList() {
  const [pageNum, setPageNum] = useState(1);
  const { results, isLoading, isError, error, hasNextPage } =
    useGetIssues(pageNum);

  const intObserver = useRef();
  const lastIssueRef = useCallback(
    (result) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((results) => {
        if (results[0].isIntersecting && hasNextPage) {
          console.log("we are here");
          setPageNum((prev) => prev + 1);
        }
      });

      if (result) intObserver.current.observe(result);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p>Error:{error.message}</p>;

  return (
    <IssueListLayout>
      {results.map((result, i) => {
        if (results.length === i + 1) {
          return (
            <IssueItem
              ref={lastIssueRef}
              key={result.id}
              idx={i}
              result={result}
            />
          );
        }
        return <IssueItem key={result.id} idx={i} result={result} />;
      })}
      {isLoading && <p>Loading ... </p>}
    </IssueListLayout>
  );
}

const IssueListLayout = styled.div``;

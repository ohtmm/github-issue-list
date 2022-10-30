import styled from "styled-components";
import IssueItem from "./IssueItem";
import React, { useCallback, useRef, useState } from "react";
import useGetIssues from "@/lib/hooks/useGetIssues";
import Loader from "@/components/Loader";
import Ad from "@/components/Ad";

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
        } else if (i === 4) {
          return <Ad key={result.id} />;
        } else {
          return <IssueItem key={result.id} idx={i} result={result} />;
        }
      })}
      {isLoading && <Loader />}
    </IssueListLayout>
  );
}

const IssueListLayout = styled.div``;

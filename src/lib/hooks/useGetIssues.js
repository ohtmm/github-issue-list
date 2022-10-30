import { useState, useEffect, useContext } from "react";
import { getIssuePage } from "../api/api";
import { IssueContext } from "../states/IssueProvider";

const useGetIssues = (pageNum = 1) => {
  const { issues, setIssues } = useContext(IssueContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    // reset
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getIssuePage(pageNum, { signal })
      .then((data) => {
        setIssues((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [pageNum]);
  return { isLoading, isError, error, hasNextPage };
};

export default useGetIssues;

import { IssueContext } from "@/lib/states/IssueProvider";
import { htmlDecode, makeHtmlText, parseMarkdown } from "@/lib/utils/remark";
import React, { useContext } from "react";
import styled from "styled-components";
import IssueItem from "../IssueList/IssueItem";

export default function IssueDetail() {
  const { selectedIssue } = useContext(IssueContext);
  const mdText = selectedIssue.body;
  const htmlText = parseMarkdown(mdText);

  return (
    <IssueDetailLayOut>
      <IssueItem idx={selectedIssue.number} issue={selectedIssue} />
      <MarkDown dangerouslySetInnerHTML={{ __html: htmlText }} />
    </IssueDetailLayOut>
  );
}

const IssueDetailLayOut = styled.div`
  width: 100%;
`;

const MarkDown = styled.div`
  padding: 2rem;
  width: 95%;
  line-height: 1.1;
  * {
    margin: 1rem;
  }
  p {
    font-size: 1.8rem;
  }
  li,
  pre,
  code {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    background-color: #22222290;
    padding: 1rem;
    border-radius: 2px;
  }
  h1,
  h2,
  h3 {
    margin: 2rem;
    width: 95%;
    font-size: 2rem;
    font-weight: 600;
    border-bottom: 1px solid #000;
  }

  h1 {
    font-size: 3rem;
  }

  strong {
    font-weight: 600;
  }

  img {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

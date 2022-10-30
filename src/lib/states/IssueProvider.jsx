import React, { useState } from "react";
import PropTypes from "prop-types";

export const IssueContext = React.createContext();

const IssueContextProvder = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [toggleDetail, setToggleDetail] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const value = {
    issues,
    setIssues,
    toggleDetail,
    setToggleDetail,
    selectedIssue,
    setSelectedIssue
  };

  return (
    <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
  );
};

export default IssueContextProvder;

IssueContextProvder.propTypes = {
  children: PropTypes.node.isRequired
};

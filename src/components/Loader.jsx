import React, { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ReactLoading type="spin" color="#a5a9fd" />
    </LoaderWrapper>
  );
};
export default memo(Loader);

const LoaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

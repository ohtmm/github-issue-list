import React from "react";
import styled from "styled-components";

const Ad = () => {
  return (
    <AdContainer>
      <a href="https://www.wanted.co.kr/">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
      </a>
    </AdContainer>
  );
};

const AdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  margin: 0 auto;
  border-bottom: 1px solid #908989;
  background-color: #fff;
  cursor: pointer;
`;

export default Ad;

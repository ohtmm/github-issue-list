import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    let timer;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 100) {
          setShowButton(true);
        } else setShowButton(false);
      }, 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    window.scroll({ behavior: "smooth", top: 0 });
  }, []);

  if (!showButton) {
    return null;
  }
  return <Button onClick={handleClick}>TOP</Button>;
};

export default TopButton;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20%;
  display: block;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: #a9adfd;
  font-weight: 600;
  border: none;
  border-radius: 40%;
  color: #faefef;
  cursor: pointer;
`;

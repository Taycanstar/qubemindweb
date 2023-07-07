import React from "react";
import styled, { keyframes } from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 60px auto;
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

const Wrapper = styled.div`
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <ClipLoader color="#353740" />
    </Wrapper>
  );
};

export default LoadingSpinner;

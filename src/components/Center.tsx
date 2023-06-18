import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Center: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Center;

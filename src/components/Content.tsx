import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  color: #fff;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 74vh;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: normal;
  margin: 0;
  padding-bottom: 50px;
  font-size: 3.8rem;
  line-height: 110%;
  letter-spacing: -0.01em;
`;

const Details = styled.p`
  padding: 5px 10px;
  margin: 0;
  align-text: center;
  color: #fff;
`;

const StyledDetailsDiv = styled(Link)`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
`;

const Content: React.FC = () => {
  return (
    <Bg>
      <div>
        <Title>Create your own personalized virtual assistant with AI</Title>
        <StyledDetailsDiv href={"/login"}>
          <Details>Get started</Details>
        </StyledDetailsDiv>
      </div>
    </Bg>
  );
};
export default Content;

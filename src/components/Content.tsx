import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  color: #fff;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 80vh;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: normal;
  margin: 0;
  margin-bottom: 50px;
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
  //   margin: 20px auto;
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
      {/* <Center> */}
      <div>
        <Title>Create your own customizable virtual assistant with AI</Title>
        <StyledDetailsDiv href={"/login"}>
          <Details>Get started</Details>
        </StyledDetailsDiv>
      </div>
      {/* </Center> */}
    </Bg>
  );
};
export default Content;

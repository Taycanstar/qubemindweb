import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  color: #fff;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: normal;
  margin: 0;
  margin-bottom: 50px;
  font-size: 3.5rem;
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
  margin: 0 auto;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const ImageDiv = styled.div`
  margin-top: 50px;
`;
const Content: React.FC = () => {
  return (
    <Bg>
      <Center>
        <div>
          <Title>Create your own customizable virtual assistant with AI</Title>
          <StyledDetailsDiv href={"/login"}>
            <Details>Get started</Details>
          </StyledDetailsDiv>
        </div>
      </Center>
    </Bg>
  );
};
export default Content;

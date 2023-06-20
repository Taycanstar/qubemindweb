import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 60px 30px;
  background-color: #000;
  color: #fff;
`;

const MainWrapper = styled.div``;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 0.015em;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.h4`
  font-size: 1.7rem;
  line-height: 130%;
  letter-spacing: 0.01em;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const About = (props: Props) => {
  return (
    <MainWrapper id="about">
      <Wrapper>
        <Title>About</Title>

        <ContentWrapper>
          <Content>
            Qubemind is an independent research hub focused on unlocking new
            dimensions of creativity with AI deployment
          </Content>

          <Content>
            We are a compact, self-funded team with a strong emphasis on design,
            human infrastructure, and the advancement of cutting-edge
            technologies.
          </Content>
        </ContentWrapper>
      </Wrapper>
      <ImageWrapper>
        <ImageContainer>
          <Image
            alt="elven lab"
            src="/assets/office.PNG"
            layout="responsive"
            objectFit="fill"
            width="100%"
            height={45}
          />
        </ImageContainer>
      </ImageWrapper>
    </MainWrapper>
  );
};
export default About;

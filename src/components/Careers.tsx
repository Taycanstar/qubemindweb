/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";
import Reveal from "./Reveal";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 100px 30px;
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

const DetailsWrapper = styled.div``;

const EmailContent = styled.h3`
  font-size: 1.3125rem;
  line-height: 130%;
  letter-spacing: 0.01em;
  font-weight: 400;
  width: 100%;
  position: relative;
  margin: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // padding: 0 30px;
`;

const ImageRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

type Props = {
  // ... other Props
  forwardRef?: React.RefObject<HTMLDivElement>;
};

const Careers = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <MainWrapper id="careers">
      <Wrapper>
        <Reveal>
          <Title>Careers</Title>
        </Reveal>
        <Reveal>
          <ContentWrapper>
            <Content>
              We believe that developing safe and beneficial AI systems requires
              a diverse range of perspectives and expertise. We're always on the
              lookout for curious minds to join our team. Together, we'll
              explore the endless possibilities of AI and make a positive impact
              on society.
            </Content>
            <DetailsWrapper>
              <EmailContent>Email us at:</EmailContent>
              <EmailContent>careers@qubemind.com</EmailContent>
            </DetailsWrapper>
          </ContentWrapper>
        </Reveal>
      </Wrapper>
      <ImageWrapper>
        <ImageContainer>
          <ImageRow>
            <Image
              alt="elven lab"
              src="/assets/player2.PNG"
              // layout="responsive"
              objectFit="contain"
              width={330}
              height={330}
            />
            <Image
              alt="elven lab"
              src="/assets/player3.PNG"
              // layout="responsive"
              objectFit="contain"
              width={330}
              height={330}
            />
            <Image
              alt="elven lab"
              src="/assets/player6.PNG"
              // layout="responsive"
              objectFit="contain"
              width={330}
              height={330}
            />
            <Image
              alt="elven lab"
              src="/assets/player4.PNG"
              // layout="responsive"
              objectFit="contain"
              width={330}
              height={330}
            />
          </ImageRow>
        </ImageContainer>
      </ImageWrapper>
    </MainWrapper>
  );
});

Careers.displayName = "Careers";
export default Careers;

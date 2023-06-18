/* eslint-disable react/no-unescaped-entities */
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
  font-size: 1.3125rem;
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
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: red;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const Careers = (props: Props) => {
  return (
    <MainWrapper>
      <Wrapper>
        <Title>Careers</Title>

        <ContentWrapper>
          <Content>
            We believe that developing safe and beneficial AI systems requires a
            diverse range of perspectives and expertise. We're always on the
            lookout for curious minds to join our team. Together, we'll explore
            the endless possibilities of AI and make a positive impact on
            society.
          </Content>
          <DetailsWrapper>
            <EmailContent>Email us at: careers@qubemind.com</EmailContent>
          </DetailsWrapper>
        </ContentWrapper>
      </Wrapper>
      <ImageWrapper>
        <ImageContainer>
          <Image
            alt="elven lab"
            src="/assets/girls.PNG"
            layout="responsive"
            objectFit="fill"
            width="100%"
            height={50}
          />
        </ImageContainer>
      </ImageWrapper>
    </MainWrapper>
  );
};
export default Careers;

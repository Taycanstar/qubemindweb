/* eslint-disable react/no-unescaped-entities */
import React from "react";
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
  padding: 100px 30px 200px 30px;
  background-color: #000;
  color: #fff;

  @media (max-width: 744px) {
    grid-template-columns: 1fr;
  }
`;

const MainWrapper = styled.div``;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 0.015em;
  @media (max-width: 744px) {
    font-size: 2.1rem;
  }

  @media (min-width: 745px) and (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.h4`
  font-size: 1.3125rem;
  line-height: 130%;
  letter-spacing: 0.01em;
  margin: 0;
  font-weight: 400;

  @media (max-width: 744px) {
    font-size: 1.1rem;
  }

  @media (min-width: 745px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const DetailsWrapper = styled.div`
  margin-bottom: 20px;
`;

const EmailContent = styled.h3`
  font-size: 1.7rem;
  line-height: 130%;
  letter-spacing: 0.01em;
  font-weight: 400;
  width: 100%;
  position: relative;

  @media (max-width: 744px) {
    font-size: 1.3rem;
  }

  @media (min-width: 745px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const InfoWrapper = styled.div`
  margin-bottom: 20px;
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

const Underline = styled.div`
  height: 1px;
  background-color: #fff;
`;

const UnderlineWrapper = styled.div`
  padding: 0 30px;
  background-color: #000;
`;

const Contact: React.FC = () => {
  return (
    <MainWrapper id="contact">
      <Wrapper>
        <Reveal>
          <Title>Contact</Title>
        </Reveal>
        <Reveal>
          <ContentWrapper>
            <InfoWrapper>
              <EmailContent>
                For product support or questions please email us at
                support@qubemind.com
              </EmailContent>
            </InfoWrapper>
            <DetailsWrapper>
              <Content>For billing support:</Content>
              <Content>billing@qubemind.com</Content>
            </DetailsWrapper>
            <DetailsWrapper>
              <Content>For journalist inquiries:</Content>
              <Content>press@qubemind.com</Content>
            </DetailsWrapper>
          </ContentWrapper>
        </Reveal>
      </Wrapper>
      <UnderlineWrapper>
        <Underline />
      </UnderlineWrapper>
    </MainWrapper>
  );
};
export default Contact;

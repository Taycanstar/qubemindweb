/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Reveal from "./Reveal";

type Props = {};

const Wrapper = styled.div``;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px 70px 30px;
  background-color: #000;
  color: #fff;
`;

const Section = styled.div`
  margin-right: 25px;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 0px;
`;

const DetailsWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Details = styled.p`
  font-size: 1.05rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 16px; /* Adjust the position as needed */
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
`;

const Underline = styled.div`
  height: 1px;
  background-color: #fff;
`;

const UnderlineWrapper = styled.div`
  padding: 0 30px;
  background-color: #000;
`;

const Topics = (props: Props) => {
  return (
    <Wrapper>
      <StyledDiv>
        <Reveal>
          <Section>
            <Title>
              Minimize complexity while maximizing your brand's impact
            </Title>
            <DetailsWrapper>
              <Details>Explore our plans</Details>
            </DetailsWrapper>
          </Section>
        </Reveal>
        <Reveal>
          <Section>
            <Title>
              Streamlining work and fueling creativity through AI's seamless
              integration
            </Title>
            <DetailsWrapper>
              <Details>Discover our products</Details>
            </DetailsWrapper>
          </Section>
        </Reveal>
        <Reveal>
          <Section>
            <Title>Embark on ajourney to shape the world of tomorrow</Title>
            <DetailsWrapper>
              <Details>View careers</Details>
            </DetailsWrapper>
          </Section>
        </Reveal>
      </StyledDiv>
      <UnderlineWrapper>
        <Underline />
      </UnderlineWrapper>
    </Wrapper>
  );
};

export default Topics;

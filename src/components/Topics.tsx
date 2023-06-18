/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

type Props = {};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 50px 30px;
  background-color: #000;
  color: #fff;
`;

const Section = styled.div``;

const Title = styled.h2``;

const Details = styled.p``;

const Topics = (props: Props) => {
  return (
    <StyledDiv>
      <Section>
        <Title>Minimize complexity while maximizing your brand's impact</Title>
        <Details>View plans</Details>
      </Section>
      <Section>
        <Title>
          Streamlining work and fueling creativity through AI's seamless
          integration
        </Title>
        <Details>View products</Details>
      </Section>
      <Section>
        <Title>Embark on ajourney to shape the world of tomorrow</Title>
        <Details>View careers</Details>
      </Section>
    </StyledDiv>
  );
};

export default Topics;

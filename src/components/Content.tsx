import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled, { keyframes } from "styled-components";
import Center from "./Center";
import Reveal from "./Reveal";

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
  padding-bottom: 0px;
  font-size: 3.8rem;
  line-height: 110%;
  letter-spacing: -0.01em;
`;

const Subtitle = styled.h1`
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

const blink = keyframes`
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 0%;
  }
`;

const StyledContainer = styled.div`
  height: 100vh;
  padding: 150px 75px;
  background: #ebeef3;
  text-align: center;

  h1 {
    font-size: 50px;
  }

  #typewriter {
    color: #0072ef;
    font-weight: bold;
  }

  #cursor {
    color: #0072ef;
    animation: ${blink} 1s linear infinite;
  }
`;

// ... Other parts of the code ...

const TypewriterContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const Placeholder = styled.span`
  visibility: hidden;
`;

const TypewriterText = styled.span`
  position: absolute;
  left: 0;
  top: 0;
`;

const TypingCursor = styled.span`
  color: #ffffff;
  animation: ${blink} 1s linear infinite;
`;

const TypewriterEffect: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const phrases = ["assistant", "guide", "helper", "agent"];

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const writeLoop = async () => {
      let sleepTime = 100;
      let curWord = phrases[phraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        setText(curWord.substring(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        setText(curWord.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (phraseIndex === phrases.length - 1) {
        setPhraseIndex(0);
      } else {
        setPhraseIndex(phraseIndex + 1);
      }
    };

    writeLoop();
  }, [phraseIndex]);

  // Get the longest phrase to use as a placeholder
  const longestPhrase = phrases.reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  return (
    <TypewriterContainer>
      <Placeholder>{longestPhrase}</Placeholder>
      <TypewriterText id="typewriter">
        {text}
        <TypingCursor>|</TypingCursor>
      </TypewriterText>
    </TypewriterContainer>
  );
};

const Content: React.FC = () => {
  return (
    <Bg>
      <Reveal>
        <div>
          <Title>
            Create your own personalized virtual <TypewriterEffect />
          </Title>
          <Subtitle> with AI </Subtitle>
          <StyledDetailsDiv href={"/login"}>
            <Details>Get started</Details>
          </StyledDetailsDiv>
        </div>
      </Reveal>
    </Bg>
  );
};
export default Content;

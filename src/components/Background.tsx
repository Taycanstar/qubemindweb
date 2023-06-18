import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const ImageDiv = styled.div`
  z-index: -1;
  //   position: fixed;
  //   width: 100vw;
  height: 100vh;
  //   overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const DimOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Background: React.FC = () => {
  return (
    <ImageDiv>
      <Image
        alt="elven background"
        src="/assets/elven.PNG"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
      />
      <DimOverlay />
    </ImageDiv>
  );
};

export default Background;

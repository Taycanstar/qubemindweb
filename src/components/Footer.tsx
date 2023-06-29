import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
`;
const Text = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const TextWrapper = styled.div`
  padding: 10px 0 100px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  //   justify-content: space-around;
  gap: 40px;
`;
type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Center>
        <TextWrapper>
          <Text href="/">Qubemind © 2023</Text>
          <Text href="/terms">Terms & policies</Text>
          <Text href="/privacy-policy">Privacy policy</Text>
        </TextWrapper>
      </Center>
    </Wrapper>
  );
};

export default Footer;

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Colors from "@constants/Colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { transparentLogo } from "../../app/utils/images/ImageAssets";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import EastIcon from "@mui/icons-material/East";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const CreateText = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 15px 0;
  @media (max-width: 743px) {
    font-size: 1.8em;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  @media (max-width: 743px) {
    padding-top: 0;
  }
`;
const TitleDiv = styled.div`
  position: relative;
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 400px;
  padding: 32px;
  background-color: ${Colors.lightGrayBg};
  border-radius: 8px;
  @media (max-width: 743px) {
    width: 295px;
    height: 176px;
  }
`;

const CardStack = styled.div`
  margin-top: 16px;
  display: flex;
  height: 400px;
  width: auto;
  gap: 15px;
  @media (max-width: 743px) {
    display: flex;
    flex-direction: column;
    width: 295px;
    height: auto;
    gap: 10px;
  }
`;

const CardTitle = styled.h3`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #202123;
  font-weight: 600;

  @media (max-width: 743px) {
    font-size: 1.3em;
    margin: 0;
  }
`;

const CardText = styled.p`
  color: #353740;

  @media (max-width: 743px) {
    font-size: 14px;
  }
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 744px) {
    align-items: center;
  }
`;
const local = process.env.REACT_APP_LOCAL_URL;

const AppsPage = (props: Props) => {
  return (
    <PageContainer>
      <Wrapper>
        <StyledHeader>
          <Image
            alt="transparent Logo"
            src={transparentLogo}
            style={{
              objectFit: "contain",
              width: "100px",
              height: "100px",
              margin: "0 -22px",
            }}
          />

          <TitleDiv>
            <CreateText>Qubemind</CreateText>
          </TitleDiv>
        </StyledHeader>

        <CardStack>
          <Link href="/turinger">
            <Card>
              <TitleBox>
                <CardTitle>Turinger</CardTitle>
                <EastIcon style={{ color: "#202123", fontSize: 22 }} />
              </TitleBox>
              <CardText>Create your personalized virtual assistant</CardText>
            </Card>
          </Link>
          <Link href="/platform">
            <Card>
              <TitleBox>
                <CardTitle>Platform</CardTitle>
                <EastIcon style={{ color: "#202123", fontSize: 22 }} />
              </TitleBox>
              <CardText>Discover Qubemind's platform capabilities</CardText>
            </Card>
          </Link>
        </CardStack>
      </Wrapper>
    </PageContainer>
  );
};

export default AppsPage;

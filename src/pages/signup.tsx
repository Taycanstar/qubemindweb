import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import {
  transparentLogo,
  googleLogo,
  appleLogo,
  microsoftLogo,
} from "../app/utils/images/ImageAssets";
import Colors from "@constants/Colors";
import Link from "next/link";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;

  // background: red;
  padding: 100px 40px 40px 40px;
`;

const CreateText = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 15px 0;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 14px;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
`;

const Header = styled.div`
  // padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Section = styled.section`
  width: 400px;
`;

const EmailDiv = styled.div``;
const SignupForm = styled.form``;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const EmailInput = styled.input`
  height: 52px;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  border: 1px solid ${Colors.grayline};
  background: white;
  border-radius: 3px;
  outline: none;
  color: black;
  font-size: 16px;
  font-weight: light;

  &:valid,
  &:focus {
    color: black;
    font-weight: light;
    border: 1px solid ${Colors.amethyst};
  }
`;

const EmailLabel = styled.span`
  position: absolute;
  left: 0;
  padding: 15px;

  font-size: 16px;
  color: ${Colors.grayline};
  transition: 0.5s;
  pointer-events: none;

  ${EmailInput}:valid + &,
  ${EmailInput}:focus + & {
    color: ${Colors.amethyst};
    transform: translateX(10px) translateY(-7px);
    font-size: 14px;
    padding: 0 10px;
    background: white;
  }
`;

const UnderlineText = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  // bottom: 0;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: ${Colors.grayline};
`;

const OrText = styled.p`
  position: relative;
  font-size: 16px;
  text-align: center;
  color: ${Colors.grayline};
  display: inline-block; // add this line
  background: white; // add this line
  padding: 0 10px;
`;

const SignupBtn = styled.button`
  margin-top: 24px;
  margin-bottom: 16px;
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 3px;
  background-color: ${Colors.amethyst};
  height: 52px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkAmethyst};
  }
`;

const SocialBtn = styled.button`
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  display: block;
  width: 100%;
  height: 52px;
  padding: 0 15px;
  border: 1px solid ${Colors.grayline};
  border-radius: 3px;
  background-color: white;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const XtraSubtitle = styled(Link)`
  font-size: 14px;
  color: ${Colors.amethyst};
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
`;

const PurpleText = styled.p`
  text-align: center;
  font-size: 14px;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
  color: ${Colors.amethyst};
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.grayline};
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const GoogleBox = styled.div`
  display: flex;
  gap: 10px;
`;

const GText = styled.p`
  font-size: 16px;
  font-weight: light;
  color: black;
`;

const LogoWrapper = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
`;

const Footer = styled.footer`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledFooterDiv = styled.div``;

const FooterText = styled(Link)`
  color: ${Colors.amethyst};
  font-size: 14px;
`;

const Separator = styled.div`
  height: 10px;
  border-left: 1px solid ${Colors.amethyst};
`;

const SignupPage = (props: Props) => {
  const [email, setEmail] = useState<string>("");

  // Create an event handler for form submission.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Handle your form submission logic here.
    // This could involve sending a request to an API, for example.
    console.log(`Form submitted with email: ${email}`);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Wrapper>
      <Image
        alt="transparent Logo"
        src={transparentLogo}
        objectFit="contain"
        width={100}
        height={100}
        layout="fixed"
      />
      <Section>
        <Content>
          <Header>
            <CreateText>Create your account</CreateText>
            <Subtitle>
              Please be aware that we may need to verify your identity via phone
              during the signup process. Rest assured, your phone number will
              solely be used for this security measure.
            </Subtitle>
          </Header>
          <EmailDiv>
            <SignupForm onSubmit={handleSubmit}>
              <InputBox>
                <EmailInput type="text" required="required" />
                <EmailLabel>Email address</EmailLabel>
              </InputBox>
              <SignupBtn type="submit">Continue</SignupBtn>
            </SignupForm>
            <LoginWrapper>
              <Subtitle>Already have an account?</Subtitle>
              <XtraSubtitle href="/login">Log in</XtraSubtitle>
            </LoginWrapper>
          </EmailDiv>
          <InputBox>
            <Underline>
              <UnderlineText>
                <OrText>OR</OrText>
              </UnderlineText>
            </Underline>
          </InputBox>
          <SocialBtn type="button">
            <GoogleBox>
              <LogoWrapper>
                <StyledImage
                  alt="google Logo"
                  src={googleLogo}
                  objectFit="cover"
                  width={25}
                  height={25}
                />
              </LogoWrapper>
              <GText>Continue with Google</GText>
            </GoogleBox>
          </SocialBtn>
          <SocialBtn type="button">
            <GoogleBox>
              <LogoWrapper>
                <StyledImage
                  alt="microsoft Logo"
                  src={microsoftLogo}
                  objectFit="contain"
                  width={20}
                  height={20}
                />
              </LogoWrapper>
              <GText>Continue with Microsoft</GText>
            </GoogleBox>
          </SocialBtn>
          <SocialBtn type="button">
            <GoogleBox>
              <LogoWrapper>
                <StyledImage
                  alt="apple Logo"
                  src={appleLogo}
                  objectFit="cover"
                  width={30}
                  height={30}
                />
              </LogoWrapper>
              <GText>Continue with Apple</GText>
            </GoogleBox>
          </SocialBtn>
        </Content>
      </Section>
      <Footer>
        <FooterWrapper>
          <StyledFooterDiv>
            <FooterText href="/terms">Terms of use</FooterText>
          </StyledFooterDiv>
          <Separator></Separator>
          <StyledFooterDiv>
            <FooterText href="/privacy-policy">Privacy policy</FooterText>
          </StyledFooterDiv>
        </FooterWrapper>
      </Footer>
    </Wrapper>
  );
};

export default SignupPage;

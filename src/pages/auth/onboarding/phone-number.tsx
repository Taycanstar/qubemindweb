/* eslint-disable react/no-unescaped-entities */
// confirmEmail.tsx
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Colors from "@constants/Colors";
import Link from "next/link";
import { transparentLogo } from "../../../app/utils/images/ImageAssets";
// import PhoneInput from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";

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
  padding: 100px 40px 40px 40px;

  @media (max-width: 744px) {
    padding: 30px 40px 40px 40px;
  }
`;

const CreateText = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 15px 0;
`;

const SubtitleY = styled.p`
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

const Subtitle = styled.p`
  text-align: center;
  font-size: 12px;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  font-weight: 400;
  // margin: 0;
  margin-bottom: 10px;
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

const BdBox = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const BirthdayInput = styled.input`
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

  // &:valid,
  &:focus {
    color: black;
    font-weight: light;
    border: 2px solid ${Colors.amethyst};
  }
`;

const BirthdayLabel = styled.span`
  position: absolute;
  left: 0;
  padding: 15px;

  font-size: 16px;
  color: ${Colors.grayline};
  transition: 0.5s;
  pointer-events: none;

  ${BirthdayInput}:valid + &,
  ${BirthdayInput}:focus + & {
    color: ${Colors.amethyst};
    transform: translateX(10px) translateY(-25px);
    font-size: 14px;
    padding: 0 10px;
    background: white;
  }
`;

const OrgInput = styled.input`
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

  // &:valid,
  &:focus {
    color: black;
    font-weight: light;
    border: 2px solid ${Colors.amethyst};
  }
`;

const OrgLabel = styled.span`
  position: absolute;
  left: 0;
  padding: 15px;

  font-size: 16px;
  color: ${Colors.grayline};
  transition: 0.5s;
  pointer-events: none;

  ${OrgInput}:valid + &,
  ${OrgInput}:focus + & {
    color: ${Colors.amethyst};
    transform: translateX(10px) translateY(-25px);
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
  padding: 5px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(138, 77, 211, 0.2);
    cursor: pointer;
  }
`;

const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 39px;
  border-radius: 4px;
`;

const SubtitleZ = styled.p`
  text-align: center;
  font-size: 16px;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
  color: ${Colors.amethyst};
`;

const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.grayline};
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
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
  margin-top: auto;
  padding-bottom: 20px;
  width: 100%;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  align-items: center;
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

const EyeWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

const EditLabel = styled(Link)`
  font-size: 16px;
  color: ${Colors.amethyst};
`;

const EditWrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-38px);
  right: 15px;
  background-color: red;
  height: 100%;
`;

const EditBox = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  display: flex;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

const NameInput = styled.input`
  height: 52px;
  box-sizing: border-box;
  width: 50%;
  padding: 15px;
  border: 1px solid ${Colors.grayline};
  background: white;
  border-radius: 3px;
  outline: none;
  color: black;
  font-size: 16px;
  font-weight: light;

  // &:valid,
  &:focus {
    color: black;
    font-weight: light;
    border: 2px solid ${Colors.amethyst};
  }
`;

const LinkTerm = styled(Link)`
  text-align: center;
  font-size: 12px;
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

const VerifyNumber = () => {
  const router = useRouter();
  const { userId } = router.query;
  const LOCAL = process.env.REACT_APP_LOCAL_URL;
  const [value, setValue] = useState<string | undefined>();
  const [isResendActive, setIsResendActive] = useState<boolean>(true);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${LOCAL}/u/send-code`, {
        phoneNumber: `+${value}`,
      });

      router.push({
        pathname: "/auth/onboarding/verify",
        query: {
          phoneNumber: value,
          userId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageContainer>
      <Wrapper>
        <Image
          alt="transparent Logo"
          src={transparentLogo}
          style={{ objectFit: "contain" }}
          width={100}
          height={100}
        />
        <Section>
          <Content>
            <Header>
              <CreateText>Verify your phone number</CreateText>
            </Header>
            <SignupForm onSubmit={handleSubmit}>
              <PhoneInput
                country={"us"}
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                inputStyle={{
                  height: "52px",
                  width: "100%",
                }}
                containerStyle={{
                  height: "52px",
                  width: "100%",
                }}
              />

              <SignupBtn type="submit">Send code</SignupBtn>
            </SignupForm>
          </Content>
        </Section>
      </Wrapper>
    </PageContainer>
  );
};

export default VerifyNumber;

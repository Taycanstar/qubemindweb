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
import ErrorIcon from "@mui/icons-material/Error";

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

const PassBox = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  display: flex;
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
    border: 2px solid ${Colors.amethyst};
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

const ErrorWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  padding: 5px 0 10px 0;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${Colors.error};
  margin: 0;
  padding: 0;
`;

const local = process.env.REACT_APP_LOCAL_URL;

const SetPasswordPage = (props: Props) => {
  const router = useRouter();
  const email = router.query.email;
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    console.log(`Form submitted with email: ${email}`);

    //axios call
    try {
      const response = await axios.post(`${local}/u/register`, {
        email,
        password,
      });
      console.log(response.data.message, "msg");

      // Navigate to the email verification page
      router.push({
        pathname: "/onboarding",
        query: { email },
      });
    } catch (error) {
      console.error(`Error => ${error.response.data.error}`);
      setIsError(true);
      setError(error.response.data.error);
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
              <CreateText>Create your account</CreateText>
              <Subtitle>
                Please be aware that we may need to verify your identity via
                phone during the signup process. Rest assured, your phone number
                will solely be used for this security measure.
              </Subtitle>
            </Header>
            <EmailDiv>
              <SignupForm onSubmit={handleSubmit}>
                <InputBox>
                  <EmailInput
                    type="email"
                    required="required"
                    value={email}
                    disabled={true}
                  />
                </InputBox>
                <EditBox>
                  <EditWrapper>
                    <EditLabel href={"/login"}>Edit</EditLabel>
                  </EditWrapper>
                </EditBox>
                {isError === true && error === "User already exists" ? (
                  <ErrorWrapper>
                    <ErrorIcon
                      style={{
                        color: Colors.error,
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <ErrorText>{error}</ErrorText>
                  </ErrorWrapper>
                ) : null}

                <PassBox>
                  <EmailInput
                    type={showPassword ? "text" : "password"}
                    minLength={8}
                    required="required"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <EmailLabel>Password</EmailLabel>
                  {showPassword === true ? (
                    <EyeWrapper onClick={togglePasswordVisibility}>
                      <VisibilityOffIcon style={{ color: Colors.grayline }} />
                    </EyeWrapper>
                  ) : (
                    <EyeWrapper onClick={togglePasswordVisibility}>
                      <VisibilityIcon style={{ color: Colors.grayline }} />
                    </EyeWrapper>
                  )}
                </PassBox>
                <SignupBtn type="submit">Continue</SignupBtn>
              </SignupForm>
              <LoginWrapper>
                <Subtitle>Already have an account?</Subtitle>
                <XtraSubtitle href="/login">Log in</XtraSubtitle>
              </LoginWrapper>
            </EmailDiv>
          </Content>
        </Section>
      </Wrapper>
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
    </PageContainer>
  );
};

export default SetPasswordPage;

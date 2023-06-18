import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const StyledHeader = styled.header`
  //   background-color: #000;
`;

const Logo = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

const Wrapper = styled.div`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 25px;
  font-size: 18px;
  font-weight: light;
`;

const NavLink = styled(Link)`
  color: #fff;
`;

const NavChevronItem = styled.div`
  display: flex;
`;

const ExpandMoreIconWrapper = styled.div`
  margin-top: 1px;
`;

const ArrowIconWrapper = styled.div`
  margin-top: 3px;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SignupWrapper = styled.div`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  padding: 4px 12px;
  margin-top: -2px;
`;

const ArrowIconSignupWrapper = styled.div`
  margin-top: 0px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Link href={"/"}>
          <LogoContainer>
            <Image
              src="/assets/clear_logo.png"
              alt="Logo"
              width={75}
              height={75}
            />
            <Logo>Qubemind</Logo>
          </LogoContainer>
        </Link>
        <StyledNav>
          <NavChevronItem>
            <NavLink href={"/company"}>Developers</NavLink>
            <ExpandMoreIconWrapper>
              <ExpandMoreSharpIcon style={{ color: "#fff" }} />
            </ExpandMoreIconWrapper>
          </NavChevronItem>
          <NavChevronItem>
            <NavLink href={"/product"}>Product</NavLink>
            <ExpandMoreIconWrapper>
              <ExpandMoreSharpIcon style={{ color: "#fff" }} />
            </ExpandMoreIconWrapper>
          </NavChevronItem>

          <NavChevronItem>
            <NavLink href={"/company"}>Company</NavLink>
            <ExpandMoreIconWrapper>
              <ExpandMoreSharpIcon style={{ color: "#fff" }} />
            </ExpandMoreIconWrapper>
          </NavChevronItem>
        </StyledNav>
        <StyledNav>
          <LoginWrapper>
            <NavLink href={"/login"}>Log in</NavLink>
            <ArrowIconWrapper>
              <ArrowOutwardIcon style={{ color: "#fff", fontSize: 18 }} />
            </ArrowIconWrapper>
          </LoginWrapper>
          <SignupWrapper>
            <NavLink href={"/signup"}>Sign up</NavLink>
            <ArrowIconWrapper>
              <ArrowOutwardIcon style={{ color: "#fff", fontSize: 18 }} />
            </ArrowIconWrapper>
          </SignupWrapper>
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;

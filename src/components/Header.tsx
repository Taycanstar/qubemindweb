import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #000;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 18px;
  font-weight: light;
`;

const NavLink = styled(Link)`
  color: #fff;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Center>
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
            <NavLink href={"/product"}>Product</NavLink>
            <NavLink href={"/company"}>Company</NavLink>
          </StyledNav>
          <StyledNav>
            <NavLink href={"/login"}>Log in</NavLink>
            <NavLink href={"/signup"}>Sign up</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;

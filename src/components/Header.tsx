import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.3s;

  ${({ color }) =>
    color
      ? `
    background-color: #000;
  `
      : `background-color: rgba(0,0,0,0)`}
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
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 25px;
  font-size: 18px;
  font-weight: light;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
`;

const NavText = styled(animated.p)`
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;

const NavChevronItem = styled.div`
  display: flex;
`;

const ExpandMoreIconWrapper = styled.div`
  margin-top: 18px;
  cursor: pointer;
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

const DropdownContent = styled.div`
  position: absolute;
  margin: 0;
  top: -5px;
  // left: 0;
  background: rgba(0, 0, 0, 0);
  // padding: 10px;
  z-index: 1;
`;

const DropdownItem = styled(Link)`
  display: block;
  color: #fff;
  margin: 0 0 5px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0);

    & > span:hover::after {
      width: 100%;
    }
  }
`;

const OptionText = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.3s;
  }
`;

const Underline = styled.span`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #fff;
  transition: width 0.3s;
`;
const AnimatedDropdown = styled(animated.div)``;

const CompanyWrapper = styled.div``;
const ProductWrapper = styled.div``;
const DevsWrapper = styled.div``;

type Props = {
  // ... other props
};

const Header = (props: Props) => {
  const [isCompanyToggled, setCompanyToggle] = useState(false);
  const [isProductToggled, setProductToggle] = useState(false);
  const [isDevsToggled, setDevsToggle] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = (): boolean => {
    if (typeof window !== "undefined" && window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", changeColor);
      };
    }
  }, []);

  const DropContent = () => {
    return (
      <DropdownContent>
        <DropdownItem href="#about" alt="About">
          <OptionText>About</OptionText>
        </DropdownItem>
        <DropdownItem href="#careers" alt="Careers">
          <OptionText>Careers</OptionText>
        </DropdownItem>
        <DropdownItem href="#contact" alt="Contact">
          <OptionText>Contact</OptionText>
        </DropdownItem>
      </DropdownContent>
    );
  };

  const ProductsList = () => {
    return (
      <DropdownContent>
        <DropdownItem href="#prismbot" alt="Prismbot">
          <OptionText>Prismbot</OptionText>
        </DropdownItem>
      </DropdownContent>
    );
  };

  const DevsList = () => {
    return (
      <DropdownContent>
        <DropdownItem href="#devs-overview" alt="overview">
          <OptionText>Overview</OptionText>
        </DropdownItem>
      </DropdownContent>
    );
  };

  const { y } = useSpring({
    y: isCompanyToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isCompanyToggled
      ? "translate3D(0,0,0)"
      : "translate3D(0,-40px,0)",
    opacity: isCompanyToggled ? 1 : 0,
  });

  const { x } = useSpring({
    x: isProductToggled ? 180 : 0,
  });
  const productsAppear = useSpring({
    transform: isProductToggled
      ? "translate3D(0,0,0)"
      : "translate3D(0,-40px,0)",
    opacity: isProductToggled ? 1 : 0,
  });

  const { z } = useSpring({
    z: isDevsToggled ? 180 : 0,
  });
  const devsAppear = useSpring({
    transform: isDevsToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isDevsToggled ? 1 : 0,
  });

  return (
    <StyledHeader color={color}>
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
          <DevsWrapper>
            <NavChevronItem onClick={() => setDevsToggle(!isDevsToggled)}>
              <NavText>Developers</NavText>
              <ExpandMoreIconWrapper>
                <ExpandMoreSharpIcon style={{ color: "#fff" }} />
              </ExpandMoreIconWrapper>
            </NavChevronItem>
            <AnimatedDropdown style={devsAppear}>
              {isDevsToggled ? <DevsList /> : null}
            </AnimatedDropdown>
          </DevsWrapper>
          <ProductWrapper>
            <NavChevronItem onClick={() => setProductToggle(!isProductToggled)}>
              <NavText>Product</NavText>
              <ExpandMoreIconWrapper>
                <ExpandMoreSharpIcon style={{ color: "#fff" }} />
              </ExpandMoreIconWrapper>
            </NavChevronItem>
            <AnimatedDropdown style={productsAppear}>
              {isProductToggled ? <ProductsList /> : null}
            </AnimatedDropdown>
          </ProductWrapper>
          <CompanyWrapper>
            <NavChevronItem onClick={() => setCompanyToggle(!isCompanyToggled)}>
              <NavText>Company</NavText>
              <ExpandMoreIconWrapper>
                <ExpandMoreSharpIcon style={{ color: "#fff" }} />
              </ExpandMoreIconWrapper>
            </NavChevronItem>
            <AnimatedDropdown style={menuAppear}>
              {isCompanyToggled ? <DropContent /> : null}
            </AnimatedDropdown>
          </CompanyWrapper>
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

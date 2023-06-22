import React, { useState, useEffect, useRef, useContext } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import Center from "./Center";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Reveal from "./Reveal";
import {
  motion,
  sync,
  useCycle,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimensions";
import { useScrollLock } from "./ScrollLockContext";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.3s;

  background-color: ${({ color }) => (color ? "#000" : "rgba(0, 0, 0, 0)")};

  ${({ isOpen }) =>
    isOpen &&
    `
    body {
overflow: hidden;
    }

  `}
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

const MenuDropdown = styled.div`
  position: absolute;
`;

type Props = {
  // ... other props
  isOpen: boolean;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(0px at calc(100% - 40px) 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MotionDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #000;
`;

const MotionNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }
  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const MotionWrapper = styled.div`
  z-index: 2;
  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }

  nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
  }

  .no-scroll {
    overflow: hidden;
  }

  .dimmed-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    pointer-events: none;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: #000;
  }

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuHeader = ({ isOpen, toggleOpen }: Props) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const { height } = useDimensions(containerRef);
  return (
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
      <MotionWrapper>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation isOpen={isOpen} />
          <MenuToggle
            toggle={() => {
              toggleOpen();
            }}
          />
        </motion.nav>
      </MotionWrapper>
    </Wrapper>
  );
};

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
      <DropdownItem href="#turinger" alt="Turinger">
        <OptionText>Turinger</OptionText>
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

const HeaderDesktop = ({
  isCompanyToggled,
  setCompanyToggle,
  isProductToggled,
  setProductToggle,
  isDevsToggled,
  setDevsToggle,
  menuAppear,
  productsAppear,
  devsAppear,
}) => {
  return (
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
  );
};

const Header = (props: Props) => {
  const [isCompanyToggled, setCompanyToggle] = useState(false);
  const [isProductToggled, setProductToggle] = useState(false);
  const [isDevsToggled, setDevsToggle] = useState(false);
  const [color, setColor] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    changeColor(); // Call changeColor on initial render to set the correct initial color value
  }, []);

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
      {isOpen && (
        <motion.div
          className="dimmed-area"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
          onClick={() => toggleOpen()}
        />
      )}

      {windowWidth < 1200 ? (
        <MenuHeader isOpen={isOpen} toggleOpen={toggleOpen} />
      ) : (
        <HeaderDesktop
          isCompanyToggled={isCompanyToggled}
          setCompanyToggle={setCompanyToggle}
          isProductToggled={isProductToggled}
          setProductToggle={setProductToggle}
          isDevsToggled={isDevsToggled}
          setDevsToggle={setDevsToggle}
          menuAppear={menuAppear}
          productsAppear={productsAppear}
          devsAppear={devsAppear}
        />
      )}
    </StyledHeader>
  );
};

export default Header;

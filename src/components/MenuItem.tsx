import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Text = styled.p`
  color: #fff;
  font-size: 16px;
`;

const TextLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  margin: 16px 0;
`;

const SecondaryText = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;
const DropdownContent = styled.div`
  position: relative;
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
  font-size: 15px;
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

const Wrapper = styled.div`
  border-top: 1px solid #fff;
  padding: 0 0 30px 0;
`;

export const MenuItem = ({ text, i, more, isOpen, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  const resetAccordion = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (!isOpen) {
      resetAccordion();
    }
  }, [isOpen]);

  const handleClick = () => {
    if (isOpen) {
      toggleAccordion();
    }
  };
  return (
    <motion.div variants={variants}>
      <Wrapper>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {url === "#" ? (
            <Text>{text}</Text>
          ) : (
            <TextLink href={url}>{text}</TextLink>
          )}
        </motion.li>
        {more !== undefined ? (
          <AnimatePresence>
            {isExpanded && isOpen && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <DropdownContent>
                  {more.map((item, i) => {
                    return (
                      <DropdownItem key={i} href={item.href} alt="#">
                        <OptionText>{item.name}</OptionText>
                      </DropdownItem>
                    );
                  })}
                </DropdownContent>
              </motion.div>
            )}
          </AnimatePresence>
        ) : null}
      </Wrapper>
    </motion.div>
  );
};

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: Props) => {
  return (
    <motion.ul variants={variants}>
      {values.map((item, i) => (
        <MenuItem
          i={i}
          url={item.url}
          text={item.text}
          key={i}
          more={item.more}
          isOpen={isOpen}
        />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];

interface MoreItem {
  name: string;
  href: string;
}

interface Item {
  text: string;
  url: string;
  more?: MoreItem[];
}

let devs: Item = {
  text: "Developers",
  url: "#",
  more: [{ name: "Overview", href: "#devs" }],
};

let product: Item = {
  text: "Product",
  url: "#",
  more: [{ name: "Turinger", href: "#turinger" }],
};

let company: Item = {
  text: "Company",
  url: "#",
  more: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
};

let login: Item = {
  text: "Log in",
  url: "/login",
};

let signup: Item = {
  text: "Sign up",
  url: "/signup",
};

const values: Item[] = [devs, product, company, login, signup];

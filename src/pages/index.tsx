import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Content from "../components/Content";
import About from "../components/About";
import Careers from "../components/Careers";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Topics from "../components/Topics";
import type { NextPage } from "next";
import styled from "styled-components";
import { ScrollLockProvider } from "../components/ScrollLockContext";

const HomePage: NextPage = () => {
  return (
    <div>
      <Background />
      <Header />
      <Content />
      <Topics />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

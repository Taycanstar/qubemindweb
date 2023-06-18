import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Content from "../components/Content";
import About from "../components/About";
import Topics from "../components/Topics";
import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const HomePage: NextPage = () => {
  return (
    <div>
      <Background />
      <Header />
      <Content />
      <Topics />
      <About />
    </div>
  );
};

export default HomePage;

import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Content from "../components/Content";
import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const HomePage: NextPage = () => {
  return (
    <div>
      <Background />
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;

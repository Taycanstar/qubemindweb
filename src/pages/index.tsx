import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;

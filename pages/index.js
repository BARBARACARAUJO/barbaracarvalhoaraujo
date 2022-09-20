import React from "react";
import AboutContent from "../components/AboutContent";
import Header from "../components/Header";
import Ticker from "../components/Ticker";

const HomePage = () => {
  return (
    <>
      <Header />
      <Ticker text="ABOUT" />
      <AboutContent />
    </>
  );
};

export default HomePage;

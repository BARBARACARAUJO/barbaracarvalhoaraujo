import React from "react";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Ticker from "../components/Ticker";

const WorkPage = () => {
  return (
    <>
      <Header />
      <Ticker text="WORK" />
      <div className="flex m-2">
        <Gallery />
      </div>
    </>
  );
};

export default WorkPage;

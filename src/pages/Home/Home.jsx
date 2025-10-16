import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../About/About";
import Applications from "../Applications/Applications";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Applications data={data}></Applications>
    </div>
  );
};

export default Home;

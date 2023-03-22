import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderLike from "../components/HeaderLike";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Specialist from "../components/Specialist";
import "../styles/global.css";


const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Specialist />
      <Reviews />
      <NewsLetter />
      <HeaderLike />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

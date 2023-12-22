import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/FLICKthis-unscreen.gif";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <img src={logo} alt="FLICKthis" className="logo" />
        <h2 className="slogan">
          The best animations are just a click away!
        </h2>
        <Link to="/movies" className="btn-enter">
          Watch all animations
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;

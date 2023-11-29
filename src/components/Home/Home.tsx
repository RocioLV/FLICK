import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/FLICKthis-unscreen.gif";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <img src={logo} alt="FLICKthis" className="logo" />
        <h2 className="slogan">
          ¡Las mejores animaciones a un clic de distancia!
        </h2>
        <Link to="/movies" className="btn-enter">
          Ver todas las animaciones
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;

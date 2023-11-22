// Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/FLICKthis-unscreen.gif';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="FLICKthis" className="logo" />
      <h1 className="slogan">¡Bienvenidas a FLICK!</h1>
      <p className="invitation">Explora nuestro catálogo de películas.</p>
      <Link to="/movies" className="btn-enter">Ir a las películas</Link>
    </div>
  );
};

export default Home;

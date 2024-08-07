// Header.tsx
import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div> */}
      <div className="header-center">
        <img src="src/assets/FLICKthis.gif" alt="Logo" className="logo-h" />
      </div>
      <div className="header-right">
        <div className='menu-item'></div>
          <li className='menu-item'>Movies</li>
          <li className='menu-item'>TV Show</li>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
    </header>
  );
};

export default Header;

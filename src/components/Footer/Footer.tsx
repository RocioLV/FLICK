// Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Developed with ❤️ by Ro LV | Database:{" "}
        <a href="https://www.themoviedb.org/">TMDB</a>
      </p>
    </footer>
  );
};

export default Footer;

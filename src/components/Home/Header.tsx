
import flickLogo from "../../assets/flick-logo-header.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="flick-header">
      <div className="flick-header-content">
        <a
          href="/"
          className="flick-brand"
          aria-label="FLICK — Home"
        >
          <img
            src={flickLogo}
            alt="FLICK"
            className="flick-brand-logo"
          />
        </a>

        <nav aria-label="Main navigation">
          <a href="#movie-catalog" className="flick-nav-link">
            Explore movies
          </a>
        </nav>
      </div>
    </header>
  );
}


import "./Footer.css";

export default function Footer() {
  return (
    <footer className="flick-footer">
      <div className="flick-footer-content">
        <p>
          Designed & developed by{" "}
          <a
            href="https://github.com/RocioLV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ro LV
          </a>
        </p>

        <p className="flick-footer-credit">
          Movie data provided by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  );
}

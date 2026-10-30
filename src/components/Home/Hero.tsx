
import "./Hero.css";

export default function Hero() {
  return (
    <section className="flick-hero" aria-labelledby="hero-title">
      <div className="flick-hero-content">
        <p className="flick-hero-eyebrow">
          YOUR NEXT MOVIE STARTS HERE
        </p>

        <h1 id="hero-title">
          Great stories are
          <span> worth discovering.</span>
        </h1>

        <p className="flick-hero-description">
          Explore movies, discover new favorites, and find
          something worth watching.
        </p>

        <a href="#movie-catalog" className="flick-hero-link">
          Explore movies <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

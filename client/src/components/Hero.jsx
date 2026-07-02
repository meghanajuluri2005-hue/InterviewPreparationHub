import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Interview Preparation Hub</h1>
      <p>
        Practice coding, prepare interview questions, track your progress,
        and crack your dream job.
      </p>

      <div className="hero-buttons">
        <button>Get Started</button>
        <button>Explore Questions</button>
      </div>
    </section>
  );
}

export default Hero;
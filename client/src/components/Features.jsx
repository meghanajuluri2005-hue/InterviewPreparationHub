import "../styles/Features.css";

function Features() {
  const features = [
    {
      title: "Topic-wise Questions",
      description: "Practice interview questions categorized by topics."
    },
    {
      title: "Coding Challenges",
      description: "Improve your coding skills with daily challenges."
    },
    {
      title: "Progress Tracking",
      description: "Track your preparation and completed topics."
    },
    {
      title: "Notes Management",
      description: "Create and organize your interview notes."
    },
    {
      title: "Mock Tests",
      description: "Take mock interviews and evaluate yourself."
    }
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
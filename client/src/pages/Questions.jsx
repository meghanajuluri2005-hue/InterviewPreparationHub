import "../styles/Questions.css";

function Questions() {
  const topics = [
    "Java",
    "Python",
    "DSA",
    "SQL",
    "DBMS",
    "Operating System",
    "Computer Networks",
    "HR Interview"
  ];

  return (
    <div className="questions">
      <h1>Interview Questions</h1>

      <div className="question-grid">
        {topics.map((topic, index) => (
          <div className="question-card" key={index}>
            <h2>{topic}</h2>
            <button>View Questions</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
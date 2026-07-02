import "../styles/Coding.css";

function Coding() {
  const challenges = [
    "Two Sum",
    "Reverse String",
    "Palindrome Number",
    "Merge Sorted Arrays",
    "Binary Search",
    "Linked List",
    "Stack",
    "Queue"
  ];

  return (
    <div className="coding">
      <h1>Coding Challenges</h1>

      <div className="coding-grid">
        {challenges.map((item, index) => (
          <div className="coding-card" key={index}>
            <h2>{item}</h2>
            <button>Solve</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coding;
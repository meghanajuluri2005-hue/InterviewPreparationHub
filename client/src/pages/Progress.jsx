import "../styles/Progress.css";

function Progress() {
  return (
    <div className="progress">
      <h1>Your Progress</h1>

      <div className="progress-box">
        <p>Questions Completed: 25%</p>

        <progress value="25" max="100"></progress>

        <p>Coding Completed: 40%</p>

        <progress value="40" max="100"></progress>

        <p>Mock Tests: 15%</p>

        <progress value="15" max="100"></progress>
      </div>
    </div>
  );
}

export default Progress;
import "../styles/Notes.css";

function Notes() {
  return (
    <div className="notes">
      <h1>Interview Notes</h1>

      <div className="notes-card">
        <h2>Java Notes</h2>
        <p>Core Java concepts and OOP.</p>
      </div>

      <div className="notes-card">
        <h2>Python Notes</h2>
        <p>Python basics and advanced topics.</p>
      </div>

      <div className="notes-card">
        <h2>SQL Notes</h2>
        <p>Queries, joins, normalization.</p>
      </div>
    </div>
  );
}

export default Notes;
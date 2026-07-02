import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav>
      <h2>Interview Preparation Hub</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/questions">Questions</Link></li>
        <li><Link to="/coding">Coding</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/mocktest">Mock Test</Link></li>
        <li><Link to="/progress">Progress</Link></li>

        {user ? (
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
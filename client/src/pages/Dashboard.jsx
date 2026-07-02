import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const stats = [
    {
      title: "Questions Solved",
      value: "25",
    },
    {
      title: "Coding Challenges",
      value: "18",
    },
    {
      title: "Notes Created",
      value: "12",
    },
    {
      title: "Mock Tests",
      value: "5",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.name} 👋</h1>

      <p>Track your interview preparation progress.</p>

      <div className="dashboard-cards">
        {stats.map((item, index) => (
          <div className="dashboard-card" key={index}>
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
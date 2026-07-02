import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import Coding from "./pages/Coding";
import Notes from "./pages/Notes";
import MockTest from "./pages/MockTest";
import Progress from "./pages/Progress";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </>
  );
}

export default App;
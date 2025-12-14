import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-wrapper">
      {/* SIDEBAR */}
      <aside className="dash-sidebar">
        <h2 className="dash-logo">ResumeXpert</h2>

        <ul className="dash-menu">
          <li className="active">📊 Dashboard</li>
          <li onClick={() => navigate("/my-resumes")}>📁 My Resumes</li>
          <li onClick={() => navigate("/templates")}>🎨 Templates</li>
          <li onClick={() => navigate("/profile")}>👤 Profile</li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="dash-main">
        <h1 className="dash-title">Welcome 👋</h1>
        <p className="dash-sub">Start building your professional resume and land your dream job.</p>

        <div className="dash-grid">
          <div className="dash-card">
            <button className="create-btn" onClick={() => navigate("/create-resume")}>
              ➕ Create New Resume
            </button>
            <h3>Sample Resume</h3>
            <p>Updated: 12 Feb 2025</p>
            <div className="dash-actions">
              <span>Edit</span>
              <span>Download</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="dash-card">
            <h3>📌 2 Resumes Created</h3>
          </div>

          <div className="dash-card">
            <h3>⭐ 80% Profile Completed</h3>
          </div>

          <div className="dash-card">
            <h3>⏳ Last Edited: 12 Feb 2025</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
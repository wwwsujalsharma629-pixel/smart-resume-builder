import React from "react";
import { useNavigate } from "react-router-dom";
import "./Templates.css";

const Templates = () => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Modern Template", icon: "📄" },
    { id: 2, name: "Professional Template", icon: "🧾" },
    { id: 3, name: "Creative Template", icon: "✨" },
  ];

  const handleSelect = (id) => {
    localStorage.setItem("selectedTemplate", id);
    navigate("/create-resume");
  };

  return (
    <div className="templates-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ResumeXpert</h2>
        <ul>
          <li onClick={() => navigate("/create-resume")}>📄 Resume Builder</li>
          <li className="active">🎨 Templates</li>
          <li onClick={() => navigate("/dashboard")}>📊 Dashboard</li>
          <li onClick={() => navigate("/profile")}>👤 Profile</li>
        </ul>
        <button className="logout" onClick={() => navigate("/login")}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="templates-main">
        <h1>Resume Templates 🎨</h1>
        <p>Select a template to start building your resume</p>

        <div className="cards">
          {templates.map((t) => (
            <div key={t.id} className="template-card" onClick={() => handleSelect(t.id)}>
              <span className="icon">{t.icon}</span>
              <h3>{t.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Templates;
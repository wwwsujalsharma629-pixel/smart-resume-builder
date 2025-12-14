// src/pages/ResumeBuilder.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const navigate = useNavigate();

  const [resume, setResume] = useState({
    fullName: "",
    jobTitle: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };
const handleSave = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    console.log("Saving resume data:", resume);

    const response = await axios.post(
      "http://localhost:5000/api/resume/save",
      resume,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Save response:", response.data);
    alert("Resume saved successfully ✅");
    navigate("/preview-resume");

  } catch (error) {
    console.error("Save resume error:", error.response || error);
    alert(
      error.response?.data?.message ||
        "Failed to save resume. Check backend console."
    );
  }
};

  return (
    <div className="builder-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ResumeXpert</h2>
        <ul>
          <li className="active">📄 Resume Builder</li>
          <li onClick={() => navigate("/templates")}>🎨 Templates</li>
          <li onClick={() => navigate("/dashboard")}>📊 Dashboard</li>
          <li onClick={() => navigate("/profile")}>👤 Profile</li>
        </ul>
        <button className="logout" onClick={() => navigate("/login")}>
          Logout
        </button>
      </aside>

      {/* Form + Preview */}
      <div className="main">
        <h1 className="title">Build Your Resume 🚀</h1>
        <p className="subtitle">
          Fill your information and preview / download your resume.
        </p>

        <div className="content">
          {/* FORM SECTION */}
          <div className="form-section">
            <label>Full Name</label>
            <input
              name="fullName"
              value={resume.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <label>Job Title</label>
            <input
              name="jobTitle"
              value={resume.jobTitle}
              onChange={handleChange}
              placeholder="Ex: Full Stack Developer"
            />

            <label>Professional Summary</label>
            <textarea
              name="summary"
              value={resume.summary}
              onChange={handleChange}
              placeholder="Short 3–4 line career summary"
            />

            <label>Skills</label>
            <textarea
              name="skills"
              value={resume.skills}
              onChange={handleChange}
              placeholder="Ex: React, Node.js, MongoDB, Python..."
            />

            <label>Experience</label>
            <textarea
              name="experience"
              value={resume.experience}
              onChange={handleChange}
              placeholder="Company | Role | Duration | Achievements"
            />

            <label>Education</label>
            <textarea
              name="education"
              value={resume.education}
              onChange={handleChange}
              placeholder="College | Degree | Year"
            />

            <div className="buttons">
              <button className="ai-btn">✨ AI Improve</button>

              <button className="save-btn" type="button" onClick={handleSave}>
                💾 Save
              </button>

              <button
                className="preview-btn"
                type="button"
                onClick={() => navigate("/preview-resume")}
              >
                👀 Preview Resume
              </button>
            </div>
          </div>

          {/* LIVE PREVIEW */}
          <div className="preview-section">
            <div className="preview-card">
              <h2 className="preview-name">{resume.fullName || "Full Name"}</h2>
              <p className="preview-title">{resume.jobTitle || "Job Title"}</p>

              <div className="preview-block">
                <h3>🔹 Summary</h3>
                <p>{resume.summary || "A short professional summary will appear here."}</p>
              </div>

              <div className="preview-block">
                <h3>🔹 Skills</h3>
                <p>{resume.skills || "Ex: React, JavaScript, UI/UX, etc."}</p>
              </div>

              <div className="preview-block">
                <h3>🔹 Experience</h3>
                <p>{resume.experience || "Your work experience will appear here."}</p>
              </div>

              <div className="preview-block">
                <h3>🔹 Education</h3>
                <p>{resume.education || "Your education details will appear here."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-wrapper">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <h2 className="profile-logo">ResumeXpert</h2>

        <ul className="profile-menu">
          <li onClick={() => navigate("/dashboard")}>📊 Dashboard</li>
          <li onClick={() => navigate("/create-resume")}>📝 Resume Builder</li>
          <li onClick={() => navigate("/templates")}>🎨 Templates</li>
          <li className="active">👤 Profile</li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/login")}>Logout</button>
      </aside>

      {/* Main Section */}
      <main className="profile-main">
        <h1 className="profile-title">Edit Profile ✨</h1>
        <p className="profile-sub">Update your personal details to improve resume suggestions</p>

        <div className="profile-box">
          <label>Full Name</label>
          <input name="fullName" value={user.fullName} onChange={handleChange} placeholder="Enter your full name" />

          <label>Email</label>
          <input name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />

          <label>Phone Number</label>
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Mobile number" />

          <label>Location</label>
          <input name="location" value={user.location} onChange={handleChange} placeholder="City, Country" />

          <label>Job Title</label>
          <input name="jobTitle" value={user.jobTitle} onChange={handleChange} placeholder="Ex: Full Stack Developer" />

          <label>GitHub</label>
          <input name="github" value={user.github} onChange={handleChange} placeholder="GitHub Profile URL" />

          <label>LinkedIn</label>
          <input name="linkedin" value={user.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" />

          <button className="save-btn">💾 Save Changes</button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
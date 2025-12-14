// LandingPage.jsx
import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lp-wrapper">
      <nav className="lp-nav">
        <div className="lp-logo">ResumeXpert</div>
        <button
          className="btn-nav-primary"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </nav>

      <main className="lp-main">
        <section className="lp-hero">
          <h1 className="lp-title">
            Craft <span className="grad">Professional Resumes</span> Instantly
          </h1>

          <p className="lp-sub">
            Create job-winning resumes with expertly designed templates, ATS-
            friendly and recruiter-approved, tailored to your career goals.
          </p>

          <div className="lp-actions">
            <button className="btn-start" onClick={() => navigate("/register")}>
              Start Building →
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/templates")}
            >
              View Templates
            </button>
          </div>

          <div className="lp-stats">
            <div className="lp-stat">
              <h3>50K+</h3>
              <p>Resumes Created</p>
            </div>
            <div className="lp-stat">
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>
            <div className="lp-stat">
              <h3>5 Min</h3>
              <p>Avg Build Time</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
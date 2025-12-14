import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PreviewResumes.css";

const PreviewResumes = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/api/resume/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,m
            },
          }
        );

        // ✅ THIS WAS THE MAIN ISSUE BEFORE
        setResume(res.data.resume);
      } catch (error) {
        console.error("Fetch resume error:", error);
        alert("No resume found. Please create one first.");
        navigate("/create-resume");
      }
    };

    fetchResume();
  }, [navigate]);

  if (!resume) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading resume...
      </h2>
    );
  }

  return (
    <div className="preview-template">
      <h1>{resume.fullName}</h1>
      <h3>{resume.jobTitle}</h3>

      <section>
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>{resume.skills}</p>
      </section>

      <section>
        <h2>Experience</h2>
        <p>{resume.experience}</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>{resume.education}</p>
      </section>
    </div>
  );
};

export default PreviewResumes;
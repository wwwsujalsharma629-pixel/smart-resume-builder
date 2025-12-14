import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Template from "./pages/Templates";
import Profile from "./pages/Profile";
import PreviewResumes from "./pages/PreviewResumes";

<Route path="/preview" element={<PreviewResumes />} />

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* USER ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-resume" element={<ResumeBuilder />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
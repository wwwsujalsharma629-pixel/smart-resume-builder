import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: { type: String, required: true },
    jobTitle: { type: String, default: "" },
    summary: { type: String, default: "" },
    skills: { type: String, default: "" },
    experience: { type: String, default: "" },
    education: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
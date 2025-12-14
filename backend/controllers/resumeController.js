import Resume from "../models/resumeModel.js";

export const createResume = async (req, res) => {
  try {
    const userId = req.user._id;

    let resume = await Resume.findOne({ user: userId });

    if (resume) {
      resume = await Resume.findOneAndUpdate(
        { user: userId },
        { ...req.body },
        { new: true }
      );
      return res.status(200).json({ message: "Resume updated", resume });
    }

    const newResume = await Resume.create({
      user: userId,
      ...req.body,
    });

    return res.status(201).json({ message: "Resume created", resume: newResume });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Resume save failed" });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    return res.status(200).json({ resume });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get resume" });
  }
};
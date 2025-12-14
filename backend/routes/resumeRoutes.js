import express from "express";
import protect from "../middlware/authmiddleware.js";
import { createResume, getResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/savnpme", protect, createResume);
router.get("/get", protect, getResume);

export default router;
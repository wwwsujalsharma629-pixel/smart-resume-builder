import multer from "multer";

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder name (make sure it exists)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // proper template string
  },
});

// ✅ File filter (fixed spelling + logic)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"]; // corrected MIME types
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, .png formats are allowed!"), false);
  }
};

// ✅ Correct usage
const upload = multer({ storage, fileFilter });

export default upload;

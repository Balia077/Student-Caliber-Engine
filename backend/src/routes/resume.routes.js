const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload.middleware");
const protect = require("../middlewares/auth.middleware");

const {
  uploadResumes,
  downloadReport,
} = require("../controllers/resume.controller");

router.post(
  "/upload",
  protect,
  upload.array("resumes", 30),
  uploadResumes
);

router.get("/report", protect, downloadReport);

module.exports = router;
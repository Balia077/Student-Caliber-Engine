const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload.middleware");

const {
  uploadResumes,
  downloadReport,
} = require("../controllers/resume.controller");

router.post(
  "/upload",
  upload.array("resumes", 20),
  uploadResumes
);

router.get("/report", downloadReport);

module.exports = router;
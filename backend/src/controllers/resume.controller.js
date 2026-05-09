const fs = require("fs");
const path = require("path");

const parseResume = require("../services/parserService");
const scoreResume = require("../services/scoringService");
const generateAnalytics = require("../services/analyticsService");
const generatePdfReport = require("../services/reportService");

let latestAnalytics = null;

const uploadResumes = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const results = [];

    for (const file of files) {
      const parsedData = await parseResume(file.path);

      const analysis = scoreResume(parsedData.text);

      results.push({
        ...parsedData,
        ...analysis,
        fileName: file.originalname,
      });
    }

    const analytics = generateAnalytics(results);

    latestAnalytics = {
      analytics,
      resumes: results,
    };

    res.status(200).json({
      success: true,
      totalResumes: results.length,
      analytics,
      resumes: results,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const downloadReport = async (req, res) => {
  try {
    if (!latestAnalytics) {
      return res.status(400).json({
        success: false,
        message: "No analytics found",
      });
    }

    const filePath = await generatePdfReport(latestAnalytics);

    res.download(filePath);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "PDF generation failed",
    });
  }
};

module.exports = {
  uploadResumes,
  downloadReport,
};

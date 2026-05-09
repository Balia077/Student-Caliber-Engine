const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generatePdfReport = (data) => {
  return new Promise((resolve, reject) => {
    const reportsDir = path.join(__dirname, "../reports");

    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const filePath = path.join(
      reportsDir,
      `report-${Date.now()}.pdf`
    );

    const doc = new PDFDocument({
      margin: 50,
    });

    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc
      .fontSize(24)
      .text("Student Caliber Engine Report", {
        align: "center",
      });

    doc.moveDown(2);

    doc
      .fontSize(18)
      .text(
        `Calibre Score: ${data.analytics.calibreScore}`
      );

    doc.text(
      `Total Resumes: ${data.analytics.totalResumes}`
    );

    doc.text(
      `High Risk Count: ${data.analytics.highRiskCount}`
    );

    doc.moveDown(2);

    doc.fontSize(20).text("Resume Analysis");

    doc.moveDown();

    data.resumes.forEach((resume, index) => {
      doc
        .fontSize(14)
        .fillColor("black")
        .text(
          `${index + 1}. ${resume.fileName}`
        );

      doc.text(`Score: ${resume.totalScore}`);

      doc.text(`Status: ${resume.status}`);

      doc.text(
        `Strengths: ${resume.strengths.join(", ")}`
      );

      doc.text(
        `Weaknesses: ${resume.weaknesses.join(", ")}`
      );

      doc.moveDown();
    });

    doc.end();

    stream.on("finish", () => {
      resolve(filePath);
    });

    stream.on("error", (err) => {
      reject(err);
    });
  });
};

module.exports = generatePdfReport;
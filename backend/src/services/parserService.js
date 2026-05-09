const fs = require("fs");
const PDFParser = require("pdf2json");

const parseResume = (filePath, fileName) => {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData) => {
      reject(errData.parserError);
    });

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      let extractedText = "";

      pdfData.Pages.forEach((page) => {
        page.Texts.forEach((text) => {
          text.R.forEach((r) => {
            extractedText += decodeURIComponent(r.T) + " ";
          });
        });
      });

      resolve({
        fileName,
        text: extractedText,
        pages: pdfData.Pages.length,
        wordCount: extractedText.split(/\s+/).length,
      });
    });

    pdfParser.loadPDF(filePath);
  });
};

module.exports = parseResume;
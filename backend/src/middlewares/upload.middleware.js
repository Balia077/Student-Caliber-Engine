const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype !==
    "application/pdf"
  ) {
    return cb(
      new Error(
        "Only PDF files allowed"
      ),
      false
    );
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 30,
  },
});

module.exports = upload;
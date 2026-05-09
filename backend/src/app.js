const express = require("express");
const cors = require("cors");

const resumeRoutes = require("./routes/resume.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(
  cors({
    origin:
      "https://student-caliber-engine-blond.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/api/resumes",
  resumeRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

module.exports = app;
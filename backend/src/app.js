const express = require('express');
const cors = require('cors');
const resumeRoutes = require('./routes/resume.routes');
const { resume } = require('pdfkit');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/resumes", resumeRoutes);

module.exports = app;
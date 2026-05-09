require("dotenv").config();

const app = require("./src/app");
const connectDB = require('./src/db/db.js');

const PORT = process.env.PORT || 5000;

connectDB();

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.listen(PORT, (err) => {
//   if (err) console.error("Error: ", err);
//   else console.log(`listening on port http://localhost:${PORT}`);
// });

module.exports = app;

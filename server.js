const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const api_endpoint = require("./api/api_endpoint.route.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/v1", api_endpoint);
app.get("/*", function (req, res) {
  console.log("handled by react");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.listen(PORT, (err) => {
//   if (err) console.error("Error: ", err);
//   else console.log(`listening on port http://localhost:${PORT}`);
// });

module.exports = app;

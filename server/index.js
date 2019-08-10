const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.status(200).send("hi");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
const express = require("express");
const path = require("path");
const app = express();
const port = 3004;

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "prashant",
    name: "hello prashant welcome back!.....",
  });
});
app.get("*", (req, res) => {
  res.render("_404");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

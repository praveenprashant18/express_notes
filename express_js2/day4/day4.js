//express as a backend
//how to create a website using express js.
//static website by using middleware

//middleware is a built-in function
const path = require("path");
const express = require("express");
const app = express();

//relative absolute
const staticpath = path.join(__dirname, "./public");

app.use(express.static(staticpath));

app.get("/about", (req, res) => {
  res.send("<h1> This is About Page</h1>");
});

app.listen(3005, () => {
  console.log("server is running at 3005");
});

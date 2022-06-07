//Routing in express js.

// when client comes to www.website.com - welcome to homepage.
// /about.
// /contact.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("this is home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("this is about page");
});
// go to network tab in f12 tool by chrome
app.get("/contact", (req, res) => {
  res.status(200).send("this is contact page");
});
app.listen(3002, () => {
  console.log("server is running at 3002");
});

//--------------------------------------------------------------------------------------------------
//when we using routing then how to show a client html data and json data as a response it.

// for example
// if we write multiple resizeBy.send multiple times we cannot do it
// app.get("/", (req, res) => {
//   res.send("<h1>this homapge</h1>");
//   res.send("this is hompage 2 example");
// });
// app.get("/", (req, res) => {
//   res.write("<h1>this homapge</h1>");
//   res.write("<h1>this homapge</h1>");
// });
//one problem is that it will remain progress in loading webpages the we have to write is
//res.send()

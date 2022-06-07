//what is express js?
//express js is a node.js framework and gives simplicity,scalable of node.js to make websites and 
//use api.

//why express js to use with Node.js?
//+=> from node we write 10-15 codes for a project but from express it makes us to write that
//in few lines.

// steps-
//1.makedirectory
// 2.make file
// 3.now in cmd write npm init
// 4.now install express by npm (npm i express)
// 5.now install nodemon(npm i nodemon)

//to use express we have to create express application with the
//help of express function() by express module.

const express = require("express");
const app = express(); //in app all methods and properties from express modules

app.get("/", (req, res) => {
  res.send("hello world!");
}); //route,callback  parameteres in get function

app.get("/about", (req, res) => {
  res.send("this is about page");
});
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

//mostly express used for routing and api.

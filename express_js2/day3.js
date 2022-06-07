//json data pass

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("this is home page");
});
// app.get("/about", (req, res) => {
//   res.send({
//     id: 1,
//     name: "prashant",
//   });
// });
// json is same as send
app.get("/about", (req, res) => {
  res.json([
    {
      id: 1,
      name: "prashant",
    },
    {
      id: 1,
      name: "prashant",
    },
  ]);
});
//array
// app.get("/about", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "prashant",
//     },
//     {
//       id: 1,
//       name: "prashant",
//     },
//   ]);
// });
app.listen(3002, () => {
  console.log("server is running at 3002");
});

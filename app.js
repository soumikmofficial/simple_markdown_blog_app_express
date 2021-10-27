require("dotenv").config();

const express = require("express");
const app = express();
// const ejs = require("ejs");

// app.set("view engine", ejs);
app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("home");
// });

app.get("/", (req, res) => {
  res.send("working");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));

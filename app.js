require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));

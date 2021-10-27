require("dotenv").config();

const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.use("/articles", articleRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));

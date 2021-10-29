require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const methodOverride = require("method-override");

const articleRouter = require("./routes/articles");
const connectDB = require("./db/connect");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.use("/articles", articleRouter);

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

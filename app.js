require("dotenv").config();

const express = require("express");
const app = express();

const articleRouter = require("./routes/articles");
const connectDB = require("./db/connect");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const data = [
  {
    title: "First Article",
    date: new Date().toLocaleString(),
    description: "This is the very first article written for trial mode",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page", articles: data });
});

app.use("/articles", articleRouter);

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

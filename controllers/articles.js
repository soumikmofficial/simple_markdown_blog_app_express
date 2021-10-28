const Article = require("../models/article");

const data = [
  {
    title: "First Article",
    date: new Date().toLocaleDateString(),
    description: "This is the very first article written for trial mode",
  },
];

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    if (!articles) {
      res.status(200).send("There is no article to be shown");
    }
    res.status(200).render("articles", { articles });
  } catch (error) {
    console.log(error);
  }
};

const getSingleArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOne({ _id: id });
    res.render("singleArticle", { article });
  } catch (error) {
    console.log(error);
  }
};

const newArticle = async (req, res) => {
  res.status(200).render("new", { title: "Create Article" });
};

const createArticle = async (req, res) => {
  const { title, description, markdown } = req.body;
  let article = new Article({
    title,
    description,
    markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article._id}`);
  } catch (error) {
    console.log(error);
    res.render("new", { article: article });
  }
};

module.exports = {
  getAllArticles,
  newArticle,
  createArticle,
  getSingleArticle,
};

const Article = require("../models/article");

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

// *single article

const getSingleArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOne({ _id: id });
    if (!article) {
      return res.render("404");
    }
    res.render("singleArticle", { article });
  } catch (error) {
    res.status(500).json({ status: "unsuccessul", message: error });
  }
};

const newArticle = async (req, res) => {
  res
    .status(200)
    .render("new", { title: "Create Article", article: new Article() });
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

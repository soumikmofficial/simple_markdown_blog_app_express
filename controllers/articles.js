const { findOneAndDelete } = require("../models/article");
const Article = require("../models/article");

// *get all articles
const getAllArticles = async (req, res) => {
  const articles = await Article.find({}).sort({ createdAt: "desc" });
  res.status(200).render("articles", { articles });
};

// *single article
const getSingleArticle = async (req, res, next) => {
  const { slug } = req.params;
  const article = await Article.findOne({ slug });
  if (!article) {
    return res.render("404");
  }
  res.render("singleArticle", { article });
};

// ** new article page
const newArticle = async (req, res) => {
  res
    .status(200)
    .render("new", { title: "Create Article", article: new Article() });
};

// **create article
const createArticle = async (req, res, next) => {
  req.article = new Article();
  next();
};

// *edit article page

const editArticlePage = async (req, res) => {
  const { slug } = req.params;
  const article = await Article.findOne({ slug: slug });
  res.render("edit", { article });
};

// *delete article
const deleteArticle = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findOneAndDelete({ _id: id });
  if (!article) {
    return res.render("404");
  }
  res.redirect("/articles");
};

// **update article

const updateArticle = async (req, res, next) => {
  req.article = await Article.findOne({ _id: req.params.id });
  next();
};

const saveAndRedirect = (path) => {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      article = await article.save();
      res.redirect(`/articles/${article.slug}`);
    } catch (error) {
      console.log(error);
      res.render(`${path}`, { article: article });
    }
  };
};
module.exports = {
  getAllArticles,
  newArticle,
  createArticle,
  getSingleArticle,
  updateArticle,
  deleteArticle,
  editArticlePage,
  saveAndRedirect,
};

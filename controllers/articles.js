const data = [
  {
    title: "First Article",
    date: new Date().toLocaleDateString(),
    description: "This is the very first article written for trial mode",
  },
];

const getAllArticles = async (req, res) => {
  res.status(200).render("articles", { title: "articles", articles: data });
};
const newArticle = async (req, res) => {
  res.status(201).render("new", { title: "Create Article" });
};

module.exports = {
  getAllArticles,
  newArticle,
};

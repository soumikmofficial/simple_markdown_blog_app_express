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

module.exports = {
  getAllArticles,
};

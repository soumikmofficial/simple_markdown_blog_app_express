const getAllArticles = async (req, res) => {
  res.status(200).render("articles");
};

module.exports = {
  getAllArticles,
};

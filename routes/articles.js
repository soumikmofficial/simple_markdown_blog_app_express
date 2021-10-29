const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  newArticle,
  createArticle,
  getSingleArticle,
  editArticlePage,
  updateArticle,
  deleteArticle,
  saveAndRedirect,
} = require("../controllers/articles");

router
  .route("/")
  .get(getAllArticles)
  .post(createArticle, saveAndRedirect("new"));
router.route("/new").get(newArticle);
router.route("/:slug").get(getSingleArticle);
router.route("/edit/:slug").get(editArticlePage);
router
  .route("/:id")
  .put(updateArticle, saveAndRedirect("edit"))
  .delete(deleteArticle);

module.exports = router;

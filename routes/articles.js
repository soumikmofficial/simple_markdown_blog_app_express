const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  newArticle,
  createArticle,
  getSingleArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

router.route("/").get(getAllArticles).post(createArticle);
router.route("/new").get(newArticle);
router.route("/:slug").get(getSingleArticle);
router.route("/:id").patch(updateArticle).delete(deleteArticle);

module.exports = router;

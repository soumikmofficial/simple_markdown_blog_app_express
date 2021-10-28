const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  newArticle,
  createArticle,
  getSingleArticle,
} = require("../controllers/articles");

router.route("/").get(getAllArticles).post(createArticle);
router.route("/new").get(newArticle);
router.route("/:id").get(getSingleArticle);

module.exports = router;

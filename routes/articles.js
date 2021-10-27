const express = require("express");
const router = express.Router();

const { getAllArticles, newArticle } = require("../controllers/articles");

router.get("/", getAllArticles);
router.get("/new", newArticle);

module.exports = router;

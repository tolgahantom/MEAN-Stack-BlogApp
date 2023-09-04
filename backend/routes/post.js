const express = require("express");
const postController = require("../controllers/posts.js");
const router = express.Router();

const db = require("../data/db.js");

// http/localhost/3000/posts

router.get("/", postController.getAllBlog);
router.get("/:id", postController.getBlogById);
module.exports = router;

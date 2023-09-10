const express = require("express");
const postController = require("../controllers/posts.js");
const router = express.Router();

const db = require("../data/db.js");

// http/localhost/3000/posts
router.post("/create", postController.createBlog);
router.get("/:id", postController.getBlogById);
router.get("/", postController.getAllBlog);

module.exports = router;

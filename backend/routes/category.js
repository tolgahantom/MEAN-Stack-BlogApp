const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.js");

const db = require("../data/db.js");

// http/localhost/3000/posts

router.get("/", categoryController.getAllCategory);

router.get("/:id", categoryController.getCategoryById);

router.post("/create-category", categoryController.createCategory);

router.post("/delete-category", categoryController.deleteCategory);

router.post("/update-category", categoryController.updateCategory);

module.exports = router;

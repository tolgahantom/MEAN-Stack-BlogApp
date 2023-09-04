const db = require("../data/db.js");

module.exports.getAllCategory = async (req, res) => {
  try {
    db.execute("select * from categories")
      .then((data) => {
        res.status(200).json(data[0]);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports.getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    db.execute("select * from categories where id=?", [id])
      .then((data) => {
        res.status(200).json(data[0]);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports.createCategory = async (req, res) => {
  try {
    const { categoryName, url } = req.body;
    await db.execute(`insert into categories(categoryName, url) values(?,?)`, [
      categoryName,
      url,
    ]);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    const id = req.body.categoryId;
    await db.execute(`delete from categories where id=?`, [id]);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const { categoryName, categoryId, url } = req.body;
    console.log(req.body);
    await db.execute(`update categories set categoryName=?, url=? where id=?`, [
      categoryName,
      url,
      categoryId,
    ]);
  } catch (err) {
    console.log(err);
  }
};

const db = require("../data/db.js");

module.exports.getAllBlog = async (req, res) => {
  try {
    db.execute("select * from blogs")
      .then((data) => {
        res.status(200).json(data[0]);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    db.execute("select * from blogs where id=?", [id])
      .then((data) => {
        res.status(200).json(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

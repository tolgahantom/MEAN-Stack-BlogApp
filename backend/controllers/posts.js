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

module.exports.createBlog = async (req, res) => {
  try {
    console.log("create sayfası");
    const { blogTitle, blogSubtitle, blogDescription } = req.body;
    await db.execute(
      `insert into blogs(title, url,subtitle,description, image, homepage, createdAt, updatedAt) values(?,?,?,?,?,?,?,?)`,
      [
        blogTitle,
        "url",
        blogSubtitle,
        blogDescription,
        "1.jpeg",
        1,
        "2023-07-08 06:40:32",
        "2023-07-08 06:40:32",
      ]
    );
  } catch (err) {
    console.log(err);
  }
};

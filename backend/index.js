const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("../backend/routes/post.js");
const categoryRoutes = require("../backend/routes/category.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const responseData = { message: "Merhaba from Node.js server!" };
  res.json(responseData);
});

app.use("/posts", postRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

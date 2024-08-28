require("dotenv").config();
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const webRoutes = require("./routes/webRoutes");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", webRoutes);

// 404 page
app.use((req, res) => res.status(404).render("404"));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

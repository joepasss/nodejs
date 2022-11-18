const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname + "/public/css")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("not-found", { docTitle: "not-found" });
});

app.listen(3000);

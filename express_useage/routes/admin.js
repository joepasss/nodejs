const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "/views", "add-product.html"));
});

module.exports = router;

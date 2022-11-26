const express = require("express");

const router = express.Router();

const products = [];

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "add-product" });
});

exports.routes = router;
exports.products = products;

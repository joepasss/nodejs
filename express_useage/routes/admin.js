const express = require("express");

const router = express.Router();

router.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
	res.send(`
	<h1>"/add-product" route</h1>
	
	<form action="/admin/product" method="POST">
		<input type="text" name="title" />
		<button type="submit">Add Product</button>
	</form>
	`);
});

module.exports = router;

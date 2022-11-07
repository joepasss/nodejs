const express = require("express");

const router = express.Router();

// admin/add-product => GET

router.get("/add-product", (req, res, next) => {
	res.send(
		`
		<h1>ADD PRODUCT PAGE</h1>

		<form action='/admin/product' method="POST">
			<input type='text' name='title' />
			<button type='submit'>add product</button>
		</form>
		`
	);
});

// admit/product => POST

router.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;

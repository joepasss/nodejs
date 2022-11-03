const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
	res.send(`
	<h1>"/add-product" route</h1>
	
	<form action="/product" method="POST">
		<input type="text" name="title" />
		<button type="submit">Add Product</button>
	</form>
	`);
});

app.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

app.get("/", (req, res, next) => {
	res.send(`
	<h1>"/" route</h1>
	`);
});

app.listen(3000);

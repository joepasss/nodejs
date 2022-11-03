const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
	res.send(`
	<h1>"/add-product" route</h1>
	`);
});

app.use("/", (req, res, next) => {
	res.send(`
	<h1>"/" route</h1>
	`);
});

app.listen(3000);

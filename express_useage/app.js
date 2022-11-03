const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
	res.send(
		`
		<h1>ADD PRODUCT PAGE</h1>

		<form action='/product' method="POST">
			<input type='text' name='title' />
			<button type='submit'>add product</button>
		</form>
		`
	);
});

app.use("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

app.use("/", (req, res, next) => {
	// has to be start with "/"
	res.send("<h1>Hello from express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);

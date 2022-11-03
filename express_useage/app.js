const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
	console.log("This is always run!");
	next();
});

app.use("/add-product", (req, res, next) => {
	res.send("<h1>ADD PRODUCT ROUTE!</h1>");
});

app.use("/", (req, res, next) => {
	// has to be start with "/"
	res.send("<h1>Hello from express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);

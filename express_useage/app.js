const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log("in the middleware!");
	next(); // Allows the request to continue to the next middleware
});

app.use((req, res, next) => {
	console.log("IN ANOTHER MIDDLEWARE!");

	// html tag send!
	res.send("<h1>Hello from express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);

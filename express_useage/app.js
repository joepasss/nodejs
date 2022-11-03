const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log("in the middleware");
	next();
});

app.use((req, res, next) => {
	console.log("in Another middleware!");

	res.send("<h1>HELLO FROM EXPRESS!</h1>");
});

app.listen(3000);

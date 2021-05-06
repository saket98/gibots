const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoute = require("./routes/student.route");

require("dotenv").config();

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("mongodb connected.");
	})
	.catch((err) => console.log(err.message));

const app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/student", studentRoute);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

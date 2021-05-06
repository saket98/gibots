const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
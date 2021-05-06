const express = require("express");
const Student = require("../model/student.model");
const data = require("../data.json");

const router = express.Router();

router.post("/seed", async (req, res) => {
	try {
		// await Student.deleteMany({});
		let createdRecords;
		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data.length; j++) {
				createdRecords = await Student.insertMany(data[i][j]);
			}
		}
		res.json("Records successfully created");
	} catch (err) {
		console.error(err.message);
		return res.status(500).json("Internal Server error " + err.message);
	}
});

module.exports = router;

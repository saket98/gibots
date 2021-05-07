const express = require("express");
const Student = require("../model/student.model");
const data = require("../data.json");

const router = express.Router();

router.post("/seed", async (req, res) => {
	try {
		// await Student.deleteMany({});
		let createdRecords;

		// Processing the raw data
		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data.length; j++) {
				//adding filtered data into the DB
				createdRecords = await Student.insertMany(data[i][j]);
			}
		}
		res.json("Records successfully created");
	} catch (err) {
		console.error(err.message);
		return res.status(500).json("Internal Server error " + err.message);
	}
});

router.get("/sortbyage", async (req, res) => {
	try {
		//finding the data from DB
		Student.find().then((data) => {
			//Sorting the data by age using Ternary operator
			const sortable = data.sort((a, b) => (a.Age > b.Age ? 1 : -1));
			res.json({ message: "Records successfully sorted", data: sortable });
		});
	} catch (err) {
		console.error(err.message);
		return res.status(500).json("Internal Server error " + err.message);
	}
});

router.get("/marks", async (req, res) => {
	try {
		Student.find().then((data) => {
			const result = data.reduce((tot, arr) => {
				// return the sum with previous value
				return tot + arr.Marks;

				// set initial value as 0
			}, 0);
			res.json(`Total maraks for all students is ${result}`);
		});
	} catch (err) {
		console.error(err.message);
		return res.status(500).json("Internal Server error " + err.message);
	}
});

module.exports = router;

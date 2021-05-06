const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	Name: { type: String, require: true },
	Age: { type: Number, require: true },
	Marks: { type: Number, require: true },
});

module.exports = mongoose.model("Student", StudentSchema);

module.exports = (req, res, next) => {
	const name = req.params.name;
	console.log("this is name from getDataByNameHandler", name);
	require("../models/Student").findOne(
		{ name: name },
		"studentDetails",
		(err, student) => {
			if (err) {
				next(new Error("cannot get"));
			} else {
				res.status(201).send(student);
			}
		}
	);
};

const Student = require('../models/Student');

module.exports = (req, res) => {
	console.log('this is body', req.body);
	const id = require('mongoose').Types.ObjectId();

	const student = new Student({
		_id: id,
		name:req.body.name,
		password:req.body.password,
		email:req.body.email
	});

	student.save((err, student) => {
		if (err) {
			console.log('this is error from database', err);
		} else {
			res.status(201).send(student);
		}
	});
};

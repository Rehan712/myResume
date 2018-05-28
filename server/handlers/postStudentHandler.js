const Student = require('../models/Student');

module.exports = (req, res) => {
	console.log('this is body', req.body);
	const id = require('mongoose').Types.ObjectId();

	const student = new Student({
		_id: id,
		studentDetails: {
			studentAuthentication: {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			}
		}
	});

	student.save((err, student) => {
		if (err) {
			console.log('this is error from database', err);
		} else {
			res.status(201).send(student);
		}
	});
};

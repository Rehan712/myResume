module.exports = (req, res, next) => {
	const name = req.params.name;
	console.log('this is id from getDataHandler', name);
	require('../models/Student').findOne(
		{ name: name },
		'studentDetails',
		(err, students) => {
			if (err) {
				next(new Error('error'));
			} else {
				res.status(201).send(students);
			}
		}
	);
};

module.exports = (req, res, next) => {
	const id = req.params.id;
	console.log('this is id from getDataHandler', id);
	require('../models/Student').findOne(
		{ _id: id },
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

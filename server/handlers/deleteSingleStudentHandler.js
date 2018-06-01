module.exports = (req, res) => {
	// console.log(
	// 	'this is the body and params in deleteStudent',
	// 	req.body,
	// 	req.params
	// );

	const name = req.params.name;

	require('../models/Student').findOne(
		{ name: name },
		'studentDetails',
		(err, student) => {
			// console.log('this is student', student);
			var data = student.studentDetails.workExperience.filter(item => {
				if (req.body['companyName'] !== item['companyName']) {
					return true;
				} else {
					return false;
				}
			});
			var newData = [...data];
			// workExperienceObj = workExperience.splice(0, 1);
			student.studentDetails.workExperience
				.splice(0, student.studentDetails.workExperience.length)
				.concat(newData);
			// console.log(
			// 	'this is workExperience in deleteStudent',
			// 	student.studentDetails.workExperience
			// 		.splice(student.studentDetails.workExperience.length)
			// 		.concat(data)
			// 	// data
			// 	// req.body
			// );
			console.log(newData);

			student.save((err, student) => {
				if (err) {
					res.sendStatus(402);
				} else {
					res.status(201).send(student);
				}
			});
		}
	);
};

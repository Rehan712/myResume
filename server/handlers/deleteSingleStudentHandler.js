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

			var dataArray = new Array();
			if (Object.keys(req.body).includes('companyName')) {
				dataArray = [...student.studentDetails.workExperience];
				var data = dataArray.filter(item => {
					if (req.body['place'] !== item['place']) {
						return true;
					} else {
						return false;
					}
				});

				student.studentDetails.workExperience = [...data];

				student.save((err, student) => {
					if (err) {
						res.sendStatus(401);
					} else {
						res.status(201).send(student);
					}
				});
			}
			if (Object.keys(req.body).includes('degreeName')) {
				dataArray = [...student.studentDetails.education];
				var data = dataArray.filter(item => {
					if (req.body['degreeName'] !== item['degreeName']) {
						return true;
					} else {
						return false;
					}
				});

				student.studentDetails.education = [...data];

				student.save((err, student) => {
					if (err) {
						res.sendStatus(401);
					} else {
						res.status(201).send(student);
					}
				});

				// console.log("thsi is req.body in degreeName", req.body);
			} else {
				student.save((err, student) => {
					if (err) {
						res.sendStatus(401);
					} else {
						res.status(201).send(student);
					}
				});
			}
			// console.log("thsi is req.body", req.body);

			// student.studentDetails.workExperience = [...data];
			// console.log(
			// 	"this is data array",
			// 	student.studentDetails.workExperience
			// );

			// student.save((err, student) => {
			// 	if (err) {
			// 		res.sendStatus(401);
			// 	} else {
			// 		res.status(201).send(student);
			// 	}
			// });
		}
	);

	// student.studentDetails.workExperience.map(item => {
	// 	if (req.body['companyName'] === item['companyName']) {
	// 		return Object.keys(item).map((key)=>{
	// 			delete key
	// 		}
	// 	})
	// });
	// var newData = [...data];

	// workExperienceObj = workExperience.splice(0, 1);

	// student.studentDetails.workExperience
	// 	.splice(0,student.studentDetails.workExperience.length)
	// 	.concat(newData);

	// console.log(
	// 	'this is workExperience in deleteStudent',
	// 	student.studentDetails.workExperience
	// 		.splice(student.studentDetails.workExperience.length)
	// 		.concat(data)
	// 	// data
	// 	// req.body
	// );

	// console.log(newData);
};

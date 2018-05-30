var student = require('../models/Student');

module.exports = (req, res) => {
	var id = req.params.name;
	var {
		backEndName,
		backEndDescription,
		backEndDuration,
		developmentToolName,
		developmentToolDescription,
		developmentToolDuration,
		degreeName,
		degreeLevel,
		instituteName,
		majorSubject,
		educationPlace,
		passingYear,
		frontEndName,
		frontEndDescription,
		frontEndDuration,
		name,
		professionalTitle,
		email,
		phone,
		professionalSummary,
		companyName,
		startingDate,
		endingDate,
		workExperiencePlace,
		workExperienceDescription
	} = req.body;
	console.log('this is body from postSingleStudent', req.params);
	student.find({ name: id }, 'studentDetails', (err, student) => {
		console.log('this is the id', student);
		student[0].studentDetails.technicalExpertise.frontEnd.push({
			name: frontEndName,
			description: frontEndDescription,
			duration: frontEndDuration
		});
		student[0].studentDetails.technicalExpertise.backEnd.push({
			name: backEndName,
			description: backEndDescription,
			duration: backEndDuration
		});
		student[0].studentDetails.technicalExpertise.developmentTools.push({
			name: developmentToolName,
			description: developmentToolDescription,
			duration: developmentToolDuration
		});
		student[0].studentDetails.workExperience.push({
			companyName: companyName,
			startingDate,
			EndingDate: endingDate,
			place: workExperiencePlace,
			description: workExperienceDescription
		});
		student[0].studentDetails.education.push({
			degreeName,
			degreeLevel,
			instituteName,
			passingYear,
			place: educationPlace,
			majorSubject
		});

		student[0].save((err, student) => {
			if (err) {
				res.sendStatus(401);
			} else {
				res.send(student);
			}
		});
	});
};

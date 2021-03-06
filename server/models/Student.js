const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	updated_at: { type: Date, default: Date.now },
	name: String,
	password: String,
	email: String,

	studentDetails: {
		studentPersonalInfo: {
			name: String,
			summary: String,
			professtionalTitle: String,
			email: String,
			phoneNo: String
		},
		workExperience: [
			{
				companyName: String,
				startingDate: String,
				endingDate: String,
				isTillNow: { Boolean },
				place: String,
				description: String
			}
		],

		technicalExpertise: {
			frontEnd: [
				{
					frontEndName: String,
					description: String,
					duration: String
				}
			],
			backEnd: [
				{
					backEndName: String,
					description: String,
					duration: String
				}
			],
			developmentTools: [
				{
					developmentToolName: String,
					description: String,
					duration: String
				}
			],
			professionalSoftwares: [
				{
					name: String,
					description: String,
					duration: String
				}
			]
		},
		education: [
			{
				degreeName: String,
				degreeLevel: String,
				instituteName: String,
				majorSubject: String,
				place: String,
				passingYear: String
			}
		]
	}
});

module.exports = mongoose.model('Student', StudentSchema);

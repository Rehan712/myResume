import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class StudentData extends React.Component {
	// componentDidMount(){

	// }
	render() {
		const {
			submitSingleData,
			//  Input Data
			studentInfoInputData,
			studentFrontEndInputData,
			studentBackEndInputData,
			studentDevelopmentToolInputData,
			studentWorkExperienceInputData,
			studentEducationInputData,
			// Personal Info Actions
			changeStudentName,
			changeStudentEmail,
			changeStudentSummary,
			changeStudentPhone,
			changeStudentProfessionalTitle,
			// Work Experience Actions
			changeStudentStartingDate,
			changeStudentCompanyName,
			changeStudentEndingDate,
			changeStudentPlace,
			changeStudentDescription,
			// Front End Actions
			changeStudentFrontEndName,
			changeStudentFrontEndDescription,
			changeStudentFrontEndDuration,
			//Back End Actions
			changeStudentBackEndName,
			changeStudentBackEndDescription,
			changeStudentBackEndDuration,
			//DevelopmentTools Actions
			changeStudentDevelopmentToolName,
			changeStudentDevelopmentToolDescription,
			changeStudentDevelopmentToolDuration,
			// Education Actions
			changeStudentEducationPlace,
			changeStudentEducationDegreeName,
			changeStudentEducationDegreeLevel,
			changeStudentEducationPassingYear,
			changeStudentEducationMajorSubject,
			changeStudentEducationInstituteName
		} = this.props;

		const inputData = {
			...studentInfoInputData,
			...studentEducationInputData,
			...studentFrontEndInputData,
			...studentBackEndInputData,
			...studentDevelopmentToolInputData,
			...studentWorkExperienceInputData
		};
		console.log("these are the props from ...studentData", this.props);
		return (
			<div className="studentData">
				<div className="form">
					<div className="studentForm">
						<div className="formItems">
							<div className="formHeading">Personal Info</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={studentInfoInputData.name}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Email"
										id="Email"
										onChange={e => {
											changeStudentEmail(e.target.value);
										}}
										value={studentInfoInputData.email}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Professional Title"
										id="ProfessionalTitle"
										onChange={e => {
											changeStudentProfessionalTitle(e.target.value);
										}}
										value={studentInfoInputData.professionalTitle}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Summary"
										id="Summary"
										onChange={e => {
											changeStudentSummary(e.target.value);
										}}
										value={studentInfoInputData.summary}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Phone"
										id="Phone"
										onChange={e => {
											changeStudentPhone(e.target.value);
										}}
										value={studentInfoInputData.phone}
									/>
								</div>
								<div className="textItem" />
							</div>
						</div>
						<div className="formItems">
							<div className="formHeading">Work Experience</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="CompanyName"
										id="CompanyName"
										onChange={e => {
											changeStudentCompanyName(e.target.value);
										}}
										value={studentWorkExperienceInputData.companyName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="StartingDate"
										id="StartingDate"
										onChange={e => {
											changeStudentStartingDate(e.target.value);
										}}
										value={studentWorkExperienceInputData.startingDate}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EndingDate"
										id="EndingDate"
										onChange={e => {
											changeStudentEndingDate(e.target.value);
										}}
										value={studentWorkExperienceInputData.endingDate}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Place"
										id="Place"
										onChange={e => {
											changeStudentPlace(e.target.value);
										}}
										value={studentWorkExperienceInputData.workExperiencePlace}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Description"
										id="Description"
										onChange={e => {
											changeStudentDescription(e.target.value);
										}}
										value={
											studentWorkExperienceInputData.workExperienceDescription
										}
									/>
								</div>
								<div className="textItem" />
							</div>
						</div>
						<div className="formItems">
							<div className="formHeading">Technical Skills</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="FrontEndName"
										id="FrontEndName"
										onChange={e => {
											changeStudentFrontEndName(e.target.value);
										}}
										value={studentFrontEndInputData.frontEndName}
									/>
									<TextField
										style={{ width: 300 }}
										label="FrontEndDescription"
										id="FrontEndDescription"
										onChange={e => {
											changeStudentFrontEndDescription(e.target.value);
										}}
										value={studentFrontEndInputData.frontEndDescription}
									/>
									<TextField
										style={{ width: 300 }}
										label="FrontEndDuration"
										id="FrontEndDuration"
										onChange={e => {
											changeStudentFrontEndDuration(e.target.value);
										}}
										value={studentFrontEndInputData.frontEndDuration}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="BackEndName"
										id="BackEndName"
										onChange={e => {
											changeStudentBackEndName(e.target.value);
										}}
										value={studentBackEndInputData.backEndName}
									/>
									<TextField
										style={{ width: 300 }}
										label="BackEndDescription"
										id="BackEndDescription"
										onChange={e => {
											changeStudentBackEndDescription(e.target.value);
										}}
										value={studentBackEndInputData.backEndDescription}
									/>
									<TextField
										style={{ width: 300 }}
										label="BackEndDuration"
										id="BackEndDuration"
										onChange={e => {
											changeStudentBackEndDuration(e.target.value);
										}}
										value={studentBackEndInputData.backEndDuration}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="DevelopmentToolName"
										id="DevelopmentToolName"
										onChange={e => {
											changeStudentDevelopmentToolName(e.target.value);
										}}
										value={studentDevelopmentToolInputData.developmentToolName}
									/>
									<TextField
										style={{ width: 300 }}
										label="DevelopmentToolDescription"
										id="DevelopmentToolDescription"
										onChange={e => {
											changeStudentDevelopmentToolDescription(e.target.value);
										}}
										value={
											studentDevelopmentToolInputData.developmentToolDescription
										}
									/>
									<TextField
										style={{ width: 300 }}
										label="DevelopmentToolDuration"
										id="DevelopmentToolDuration"
										onChange={e => {
											changeStudentDevelopmentToolDuration(e.target.value);
										}}
										value={
											studentDevelopmentToolInputData.developmentToolDuration
										}
									/>
								</div>
							</div>
						</div>
						<div className="formItems">
							<div className="formHeading">Education</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationDegreeName"
										id="EducationDegreeName"
										onChange={e => {
											changeStudentEducationDegreeName(e.target.value);
										}}
										value={studentEducationInputData.degreeName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationDegreeLevel"
										id="EducationDegreeLevel"
										onChange={e => {
											changeStudentEducationDegreeLevel(e.target.value);
										}}
										value={studentEducationInputData.degreeLevel}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationInstituteName"
										id="EducationInstituteName"
										onChange={e => {
											changeStudentEducationInstituteName(e.target.value);
										}}
										value={studentEducationInputData.instituteName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationPlace"
										id="EducationPlace"
										onChange={e => {
											changeStudentEducationPlace(e.target.value);
										}}
										value={studentEducationInputData.educationPlace}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationPassingYear"
										id="EducationPassingYear"
										onChange={e => {
											changeStudentEducationPassingYear(e.target.value);
										}}
										value={studentEducationInputData.passingYear}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="EducationMajorSubject"
										id="EducationMajorSubject"
										onChange={e => {
											changeStudentEducationMajorSubject(e.target.value);
										}}
										value={studentEducationInputData.majorSubject}
									/>
								</div>
								<div className="textItem" />
								<div className="textItem">
									<Button
										variant="raised"
										color="primary"
										onClick={() => {
											submitSingleData(inputData);
										}}
									>
										Submit
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		studentInfoInputData: state.studentInfoInputData,
		studentFrontEndInputData: state.studentFrontEndInputData,
		studentBackEndInputData: state.studentBackEndInputData,
		studentDevelopmentToolInputData: state.studentDevelopmentToolInputData,
		studentWorkExperienceInputData: state.studentWorkExperienceInputData,
		studentEducationInputData: state.studentEducationInputData
	};
}

export default connect(mapStateToProps, {
	getSingleData: actions.getSingleData,
	// Personal Info Actions
	changeStudentName: actions.changeStudentName,
	changeStudentEmail: actions.changeStudentEmail,
	changeStudentProfessionalTitle: actions.changeStudentProfessionalTitle,
	changeStudentSummary: actions.changeStudentSummary,
	changeStudentPhone: actions.changeStudentPhone,
	// Work Experience Actions
	changeStudentCompanyName: actions.changeStudentCompanyName,
	changeStudentStartingDate: actions.changeStudentStartingDate,
	changeStudentEndingDate: actions.changeStudentEndingDate,
	changeStudentPlace: actions.changeStudentPlace,
	changeStudentDescription: actions.changeStudentDescription,
	// Expertise FrontEnd Actions
	changeStudentFrontEndName: actions.changeStudentFrontEndName,
	changeStudentFrontEndDescription: actions.changeStudentFrontEndDescription,
	changeStudentFrontEndDuration: actions.changeStudentFrontEndDuration,
	// Expertise BackEnd Actions
	changeStudentBackEndName: actions.changeStudentBackEndName,
	changeStudentBackEndDescription: actions.changeStudentBackEndDescription,
	changeStudentBackEndDuration: actions.changeStudentBackEndDuration,
	// Expertise Development Tool Actions
	changeStudentDevelopmentToolName: actions.changeStudentDevelopmentToolName,
	changeStudentDevelopmentToolDescription:
		actions.changeStudentDevelopmentToolDescription,
	changeStudentDevelopmentToolDuration:
		actions.changeStudentDevelopmentToolDuration,
	// Education Actions
	changeStudentEducationDegreeName: actions.changeStudentEducationDegreeName,
	changeStudentEducationDegreeLevel: actions.changeStudentEducationDegreeLevel,
	changeStudentEducationInstituteName:
		actions.changeStudentEducationInstituteName,
	changeStudentEducationPlace: actions.changeStudentEducationPlace,
	changeStudentEducationPassingYear: actions.changeStudentEducationPassingYear,
	changeStudentEducationMajorSubject:
		actions.changeStudentEducationMajorSubject,

	submitSingleData: actions.submitSingleData
})(StudentData);

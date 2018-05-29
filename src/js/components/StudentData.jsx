import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TextField from "@material-ui/core/TextField";

class StudentData extends React.Component {
	// componentDidMount(){

	// }
	render() {
		const inputData = { name: "rehan" };
		console.log("these are the props from studentData", this.props);
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
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
							</div>
						</div>
						<div className="formItems">
							<div className="formHeading">Work Experience</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
							</div>
						</div>
						<div className="formItems">
							<div className="formHeading">Technical Skills</div>
							<div className="items">
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
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
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
								<div className="textItem">
									<TextField
										style={{ width: 300 }}
										label="Name"
										id="Name"
										onChange={e => {
											changeStudentName(e.target.value);
										}}
										value={inputData.studentName}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { 
	getSingleData: actions.getSingleData,
	// Personal Info Actions
	changeStudentName:actions.changeStudentName,
	changeStudentEmail:actions.changeStudentEmail,
	changeStudentProfessionalTitle:actions.changeStudentProfessionalTitle,
	changeStudentSummary:actions.changeStudentSummary,
	// Work Experience Actions
	changeStudentCompanyName:actions.changeStudentCompanyName,
	changeStudentStartingDate:actions.changeStudentStartingDate,
	changeStudentEndingDate:actions.changeStudentEndingDate,
	changeStudentPlace:actions.changeStudentPlace,
	changeStudentDescription:actions.changeStudentDescription,
	// Expertise FrontEnd Actions
	changeStudentFrontEndName:actions.changeStudentFrontEndName,
	changeStudentFrontEndDescription:actions.changeStudentFrontEndDescription,
	changeStudentFrontEndDuration:actions.changeStudentFrontEndDuration,
	// Expertise BackEnd Actions
	changeStudentBackEndName:actions.changeStudentBackEndName,
	changeStudentBackEndDescription:actions.changeStudentBackEndDescription,
	changeStudentBackEndDuration:actions.changeStudentBackEndDuration,
	// Expertise Development Tool Actions
	changeStudentDevelopmentToolName:actions.changeStudentDevelopmentToolName,
	changeStudentDevelopmentToolDescription:actions.changeStudentDevelopmentToolDescription,
	changeStudentDevelopmentToolDuration:actions.changeStudentDevelopmentToolDuration,
	// Education Actions
	changeStudentEducationDegreeName:actions.changeStudentEducationDegreeName,
	changeStudentEducationDegreeLevel:actions.changeStudentEducationDegreeLevel,
	changeStudentEducationInstituteName:actions.changeStudentEducationInstituteName,
	changeStudentEducationPlace:actions.changeStudentEducationPlace,
	changeStudentEducationPassingYear:actions.changeStudentEducationPassingYear,
	changeStudentMajorSubject:actions.changeStudentMajorSubject

})(StudentData);

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';

class Data extends React.Component {
	constructor() {
		super();
		this.state = {
			openWorkExperience: false,
			openEducation: false,
			openFrontEnd: false,
			openBackEnd: false,
			openDevelopmentTool: false
		};
	}
	componentDidMount() {
		const { getData } = this.props;
		const name = localStorage.getItem('name');
		// console.log('this is id from data component', );
		getData(name);
	}

	// componentWillReceieveProps(nextProps) {
	// 	const { getData } = this.props;
	// 	if (this.props.data !== nextProps.data) {
	// 		getData(localStorage.getItem('name'));
	// 	}
	// }

	// shouldComponentUpdate(nextProps) {
	// 	return this.props.data.data !== nextProps.data.data;
	// }

	componentWillReceieveProps() {
		this.setState({ openWorkExperience: false });
	}

	// Render Work Experience

	renderWorkExperience() {
		const { data } = this.props.data;
		return Object.keys(data).length
			? data.studentDetails.workExperience.length &&
					data.studentDetails.workExperience.map((item, index) => {
						return (
							<div className="renderWorkExperience">
								<div className="item">
									<div className="heading">Company Name:</div>
									<div className="description">
										{item.companyName}
									</div>
								</div>
								<div className="item">
									<div className="heading">
										Company Place:
									</div>
									<div className="description">
										{item.place}
									</div>
								</div>
								<div className="item">
									<div className="heading">
										Job Description:
									</div>
									<div className="description">
										{item.description}
									</div>
								</div>
								<div
									className="item"
									style={{ marginTop: 50, marginBottom: 20 }}
								>
									<Button variant="raised" color="primary">
										Edit
									</Button>
									<Button
										onClick={() => {
											this.props.deleteSingleData(item);
											setTimeout(() => {
												this.props.getData(
													localStorage.getItem('name')
												);
											}, 1000);
										}}
										variant="raised"
										color="secondary"
										style={{ marginLeft: 10 }}
									>
										Delete
									</Button>
								</div>
							</div>
						);
					})
			: '';
	}

	// Render Education

	renderEducation() {
		const { data } = this.props.data;
		return Object.keys(data).length
			? data.studentDetails.education.length &&
					data.studentDetails.education.map((item, index) => {
						return (
							<div className="renderWorkExperience">
								<div className="item">
									<div className="heading">Degree Name:</div>
									<div className="description">
										{item.degreeName}
									</div>
								</div>
								<div className="item">
									<div className="heading">Degree Level:</div>
									<div className="description">
										{item.degreeLevel}
									</div>
								</div>
								<div className="item">
									<div className="heading">
										Institute Name:
									</div>
									<div className="description">
										{item.instituteName}
									</div>
								</div>
								<div className="item">
									<div className="heading">Place:</div>
									<div className="description">
										{item.place}
									</div>
								</div>
								<div className="item">
									<div className="heading">Passing Year:</div>
									<div className="description">
										{item.passingYear}
									</div>
								</div>
								<div className="item">
									<div className="heading">
										Major Subject:
									</div>
									<div className="description">
										{item.majorSubject}
									</div>
								</div>
								<div
									className="item"
									style={{ marginTop: 50, marginBottom: 20 }}
								>
									<Button variant="raised" color="primary">
										Edit
									</Button>
									<Button
										onClick={() => {
											this.props.deleteSingleData(item);
											setTimeout(() => {
												this.props.getData(
													localStorage.getItem('name')
												);
											}, 1000);
										}}
										variant="raised"
										color="secondary"
										style={{ marginLeft: 10 }}
									>
										Delete
									</Button>
								</div>
							</div>
						);
					})
			: '';
	}

	// Render Work Experience

	renderFrontEnd() {
		const { data } = this.props.data;
		return Object.keys(data).length
			? data.studentDetails.technicalExpertise.frontEnd.length &&
					data.studentDetails.technicalExpertise.frontEnd.map(
						(item, index) => {
							return (
								<div className="renderWorkExperience">
									<div className="item">
										<div className="heading"> Name:</div>
										<div className="description">
											{item.frontEndName}
										</div>
									</div>
									<div className="item">
										<div className="heading">
											Description:
										</div>
										<div className="description">
											{item.description}
										</div>
									</div>
									<div className="item">
										<div className="heading">Duration:</div>
										<div className="description">
											{item.duration}
										</div>
									</div>
									<div
										className="item"
										style={{
											marginTop: 50,
											marginBottom: 20
										}}
									>
										<Button
											variant="raised"
											color="primary"
										>
											Edit
										</Button>
										<Button
											onClick={() => {
												this.props.deleteSingleData(
													item
												);
												setTimeout(() => {
													this.props.getData(
														localStorage.getItem(
															'name'
														)
													);
												}, 1000);
											}}
											variant="raised"
											color="secondary"
											style={{ marginLeft: 10 }}
										>
											Delete
										</Button>
									</div>
								</div>
							);
						}
					)
			: '';
	}

	renderBackEnd() {
		const { data } = this.props.data;
		return Object.keys(data).length
			? data.studentDetails.technicalExpertise.backEnd.length &&
					data.studentDetails.technicalExpertise.backEnd.map(
						(item, index) => {
							return (
								<div className="renderWorkExperience">
									<div className="item">
										<div className="heading"> Name:</div>
										<div className="description">
											{item.backEndName}
										</div>
									</div>
									<div className="item">
										<div className="heading">
											Description:
										</div>
										<div className="description">
											{item.description}
										</div>
									</div>
									<div className="item">
										<div className="heading">Duration:</div>
										<div className="description">
											{item.duration}
										</div>
									</div>
									<div
										className="item"
										style={{
											marginTop: 50,
											marginBottom: 20
										}}
									>
										<Button
											variant="raised"
											color="primary"
										>
											Edit
										</Button>
										<Button
											onClick={() => {
												this.props.deleteSingleData(
													item
												);
												setTimeout(() => {
													this.props.getData(
														localStorage.getItem(
															'name'
														)
													);
												}, 1000);
											}}
											variant="raised"
											color="secondary"
											style={{ marginLeft: 10 }}
										>
											Delete
										</Button>
									</div>
								</div>
							);
						}
					)
			: '';
	}

	renderDevelopmentTool() {
		const { data } = this.props.data;
		console.log('this is data from renderWorkExperience', data);
		return Object.keys(data).length
			? data.studentDetails.technicalExpertise.developmentTools.length &&
					data.studentDetails.technicalExpertise.developmentTools.map(
						(item, index) => {
							return (
								<div className="renderWorkExperience">
									<div className="item">
										<div className="heading"> Name:</div>
										<div className="description">
											{item.developmentToolName}
										</div>
									</div>
									<div className="item">
										<div className="heading">
											Description:
										</div>
										<div className="description">
											{item.description}
										</div>
									</div>
									<div className="item">
										<div className="heading">Duration:</div>
										<div className="description">
											{item.duration}
										</div>
									</div>
									<div
										className="item"
										style={{
											marginTop: 50,
											marginBottom: 20
										}}
									>
										<Button
											variant="raised"
											color="primary"
										>
											Edit
										</Button>
										<Button
											onClick={() => {
												this.props.deleteSingleData(
													item
												);
												setTimeout(() => {
													this.props.getData(
														localStorage.getItem(
															'name'
														)
													);
												}, 1000);
											}}
											variant="raised"
											color="secondary"
											style={{ marginLeft: 10 }}
										>
											Delete
										</Button>
									</div>
								</div>
							);
						}
					)
			: '';
	}

	render() {
		const {
			// Data from database
			singleData,
			submitSingleData,
			signOutData,
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
			resetStudentInfoInput,
			// Work Experience Actions
			changeStudentStartingDate,
			changeStudentCompanyName,
			changeStudentEndingDate,
			changeStudentPlace,
			changeStudentDescription,
			resetStudentWorkExperienceInput,
			// Front End Actions
			changeStudentFrontEndName,
			changeStudentFrontEndDescription,
			changeStudentFrontEndDuration,
			resetStudentFrontEndInput,
			//Back End Actions
			changeStudentBackEndName,
			changeStudentBackEndDescription,
			changeStudentBackEndDuration,
			resetStudentBackEndInput,
			//DevelopmentTools Actions
			changeStudentDevelopmentToolName,
			changeStudentDevelopmentToolDescription,
			changeStudentDevelopmentToolDuration,
			resetStudentDevelopmentToolInput,
			// Education Actions
			changeStudentEducationPlace,
			changeStudentEducationDegreeName,
			changeStudentEducationDegreeLevel,
			changeStudentEducationPassingYear,
			changeStudentEducationMajorSubject,
			changeStudentEducationInstituteName,
			resetStudentEducationInput
		} = this.props;

		console.log('this is the data from data component', this.props);
		return (
			<div>
				<div className="data">
					<h2>Work Experience</h2>
					<ExpansionPanel expanded={this.state.openWorkExperience}>
						<ExpansionPanelSummary
							style={{ cursor: 'auto', flexDirection: 'row' }}
						>
							<div className="renderDetail">
								<div className="detailSection">
									{this.renderWorkExperience()}
								</div>
								<Button
									className="btn"
									variant="raised"
									color="primary"
									onClick={() => {
										this.setState({
											openWorkExperience: true
										});
									}}
								>
									Add Experience
								</Button>
							</div>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div className="form">
								<div className="studentForm">
									<div className="formItems">
										<div className="formHeading">
											Work Experience
										</div>
										<div className="items">
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="CompanyName"
													id="CompanyName"
													onChange={e => {
														changeStudentCompanyName(
															e.target.value
														);
													}}
													value={
														studentWorkExperienceInputData.companyName
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="StartingDate"
													id="StartingDate"
													onChange={e => {
														changeStudentStartingDate(
															e.target.value
														);
													}}
													value={
														studentWorkExperienceInputData.startingDate
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EndingDate"
													id="EndingDate"
													onChange={e => {
														changeStudentEndingDate(
															e.target.value
														);
													}}
													value={
														studentWorkExperienceInputData.endingDate
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="Place"
													id="Place"
													onChange={e => {
														changeStudentPlace(
															e.target.value
														);
													}}
													value={
														studentWorkExperienceInputData.workExperiencePlace
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="Description"
													id="Description"
													onChange={e => {
														changeStudentDescription(
															e.target.value
														);
													}}
													value={
														studentWorkExperienceInputData.workExperienceDescription
													}
												/>
											</div>
											<div
												className="textItem"
												style={{ flexDirection: 'row' }}
											>
												<Button
													color="primary"
													onClick={() => {
														submitSingleData(
															studentWorkExperienceInputData
														);
														resetStudentWorkExperienceInput();
														setTimeout(() => {
															this.setState({
																openWorkExperience: false
															});
															this.props.getData(
																localStorage.getItem(
																	'name'
																)
															);
														}, 1000);
													}}
												>
													Submit
												</Button>
												<Button
													color="secondary"
													onClick={() => {
														resetStudentWorkExperienceInput();
														this.setState({
															openWorkExperience: false
														});
													}}
												>
													Cancel
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<h2>Education</h2>
					<ExpansionPanel expanded={this.state.openEducation}>
						<ExpansionPanelSummary
							style={{ cursor: 'auto', flexDirection: 'row' }}
						>
							<div className="renderDetail">
								<div
									className="detailSection"
									style={{ justifyContent: 'space-around' }}
								>
									{this.renderEducation()}
								</div>
								<Button
									className="btn"
									variant="raised"
									color="primary"
									onClick={() => {
										this.setState({
											openEducation: true
										});
									}}
								>
									Add Education
								</Button>
							</div>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div className="form">
								<div className="studentForm">
									<div className="formItems">
										<div className="formHeading">
											Education
										</div>
										<div className="items">
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationDegreeName"
													id="EducationDegreeName"
													onChange={e => {
														changeStudentEducationDegreeName(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.degreeName
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationDegreeLevel"
													id="EducationDegreeLevel"
													onChange={e => {
														changeStudentEducationDegreeLevel(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.degreeLevel
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationInstituteName"
													id="EducationInstituteName"
													onChange={e => {
														changeStudentEducationInstituteName(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.instituteName
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationPlace"
													id="EducationPlace"
													onChange={e => {
														changeStudentEducationPlace(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.educationPlace
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationPassingYear"
													id="EducationPassingYear"
													onChange={e => {
														changeStudentEducationPassingYear(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.passingYear
													}
												/>
											</div>
											<div className="textItem">
												<TextField
													style={{ width: 300 }}
													label="EducationMajorSubject"
													id="EducationMajorSubject"
													onChange={e => {
														changeStudentEducationMajorSubject(
															e.target.value
														);
													}}
													value={
														studentEducationInputData.majorSubject
													}
												/>
											</div>
											<div className="textItem" />
											<div
												className="textItem"
												style={{ flexDirection: 'row' }}
											>
												<Button
													color="primary"
													onClick={() => {
														submitSingleData(
															studentEducationInputData
														);
														resetStudentEducationInput();
														setTimeout(() => {
															this.setState({
																openEducation: false
															});
															this.props.getData(
																localStorage.getItem(
																	'name'
																)
															);
														}, 1000);
													}}
												>
													Submit
												</Button>
												<Button
													color="secondary"
													onClick={() => {
														resetStudentEducationInput();
														this.setState({
															openEducation: false
														});
													}}
												>
													Cancel
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<h2>Technical Expertise</h2>
					<div className="technicalExpertise">
						<ExpansionPanel expanded={this.state.openFrontEnd}>
							<ExpansionPanelSummary
								style={{ cursor: 'auto', flexDirection: 'row' }}
							>
								<div className="renderDetail">
									<h2>Front End Skills</h2>
									<div className="detailSection">
										{this.renderFrontEnd()}
									</div>
									<Button
										className="btn"
										variant="raised"
										color="primary"
										onClick={() => {
											this.setState({
												openFrontEnd: true
											});
										}}
									>
										Add Front End
									</Button>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className="form">
									<div className="studentForm">
										<div className="formItems">
											<div className="formHeading">
												Front End Skill
											</div>
											<div className="items">
												<div className="textItem">
													<TextField
														style={{ width: 200 }}
														label="FrontEndName"
														id="FrontEndName"
														onChange={e => {
															changeStudentFrontEndName(
																e.target.value
															);
														}}
														value={
															studentFrontEndInputData.frontEndName
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 200 }}
														label="FrontEndDescription"
														id="FrontEndDescription"
														onChange={e => {
															changeStudentFrontEndDescription(
																e.target.value
															);
														}}
														value={
															studentFrontEndInputData.frontEndDescription
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 200 }}
														label="FrontEndDuration"
														id="FrontEndDuration"
														onChange={e => {
															changeStudentFrontEndDuration(
																e.target.value
															);
														}}
														value={
															studentFrontEndInputData.frontEndDuration
														}
													/>
												</div>
												<div
													className="textItem"
													style={{
														flexDirection: 'row'
													}}
												>
													<Button
														color="primary"
														onClick={() => {
															submitSingleData(
																studentFrontEndInputData
															);
															resetStudentFrontEndInput();
															setTimeout(() => {
																this.setState({
																	openFrontEnd: false
																});
																this.props.getData(
																	localStorage.getItem(
																		'name'
																	)
																);
															}, 1000);
														}}
													>
														Submit
													</Button>
													<Button
														color="secondary"
														onClick={() => {
															resetStudentFrontEndInput();
															this.setState({
																openFrontEnd: false
															});
														}}
													>
														Cancel
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
						<ExpansionPanel expanded={this.state.openBackEnd}>
							<ExpansionPanelSummary
								style={{ cursor: 'auto', flexDirection: 'row' }}
							>
								<div className="renderDetail">
									<h2>Back End Skills</h2>
									<div className="detailSection">
										{this.renderBackEnd()}
									</div>
									<Button
										className="btn"
										variant="raised"
										color="primary"
										onClick={() => {
											this.setState({
												openBackEnd: true
											});
										}}
									>
										Add Back End
									</Button>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className="form">
									<div className="studentForm">
										<div className="formItems">
											<div className="formHeading">
												Back End Skill
											</div>
											<div className="items">
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="BackEndName"
														id="BackEndName"
														onChange={e => {
															changeStudentBackEndName(
																e.target.value
															);
														}}
														value={
															studentBackEndInputData.backEndName
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="BackEndDescription"
														id="BackEndDescription"
														onChange={e => {
															changeStudentBackEndDescription(
																e.target.value
															);
														}}
														value={
															studentBackEndInputData.backEndDescription
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="BackEndDuration"
														id="BackEndDuration"
														onChange={e => {
															changeStudentBackEndDuration(
																e.target.value
															);
														}}
														value={
															studentBackEndInputData.backEndDuration
														}
													/>
												</div>
												<div
													className="textItem"
													style={{
														flexDirection: 'row'
													}}
												>
													<Button
														color="primary"
														onClick={() => {
															submitSingleData(
																studentBackEndInputData
															);
															resetStudentBackEndInput();
															setTimeout(() => {
																this.setState({
																	openBackEnd: false
																});
																this.props.getData(
																	localStorage.getItem(
																		'name'
																	)
																);
															}, 1000);
														}}
													>
														Submit
													</Button>
													<Button
														color="secondary"
														onClick={() => {
															resetStudentBackEndInput();
															this.setState({
																openBackEnd: false
															});
														}}
													>
														Cancel
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
						<ExpansionPanel
							expanded={this.state.openDevelopmentTool}
						>
							<ExpansionPanelSummary
								style={{ cursor: 'auto', flexDirection: 'row' }}
							>
								<div className="renderDetail">
									<h2>Development Tools</h2>
									<div className="detailSection">
										{this.renderDevelopmentTool()}
									</div>
									<Button
										className="btn"
										variant="raised"
										color="primary"
										onClick={() => {
											this.setState({
												openDevelopmentTool: true
											});
										}}
									>
										Add Development Tool
									</Button>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className="form">
									<div className="studentForm">
										<div className="formItems">
											<div className="formHeading">
												Development Tool Skill
											</div>
											<div className="items">
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="DevelopmentToolName"
														id="DevelopmentToolName"
														onChange={e => {
															changeStudentDevelopmentToolName(
																e.target.value
															);
														}}
														value={
															studentDevelopmentToolInputData.developmentToolName
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="DevelopmentToolDescription"
														id="DevelopmentToolDescription"
														onChange={e => {
															changeStudentDevelopmentToolDescription(
																e.target.value
															);
														}}
														value={
															studentDevelopmentToolInputData.developmentToolDescription
														}
													/>
												</div>
												<div className="textItem">
													<TextField
														style={{ width: 300 }}
														label="DevelopmentToolDuration"
														id="DevelopmentToolDuration"
														onChange={e => {
															changeStudentDevelopmentToolDuration(
																e.target.value
															);
														}}
														value={
															studentDevelopmentToolInputData.developmentToolDuration
														}
													/>
												</div>
												<div
													className="textItem"
													style={{
														flexDirection: 'row'
													}}
												>
													<Button
														color="primary"
														onClick={() => {
															submitSingleData(
																studentDevelopmentToolInputData
															);
															resetStudentDevelopmentToolInput();
															setTimeout(() => {
																this.setState({
																	openDevelopmentTool: false
																});
																this.props.getData(
																	localStorage.getItem(
																		'name'
																	)
																);
															}, 1000);
														}}
													>
														Submit
													</Button>
													<Button
														color="secondary"
														onClick={() => {
															resetStudentDevelopmentToolInput();
															this.setState({
																openDevelopmentTool: false
															});
														}}
													>
														Cancel
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>
				</div>
				<div className="button">
					<button onClick={signOutData}>Sign out</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,

		studentInfoInputData: state.studentInfoInputData,
		studentFrontEndInputData: state.studentFrontEndInputData,
		studentBackEndInputData: state.studentBackEndInputData,
		studentDevelopmentToolInputData: state.studentDevelopmentToolInputData,
		studentWorkExperienceInputData: state.studentWorkExperienceInputData,
		studentEducationInputData: state.studentEducationInputData
	};
}

export default connect(mapStateToProps, {
	getData: actions.getData,
	signOutData: actions.signOutData,

	getSingleData: actions.getSingleData,
	// Personal Info Actions
	changeStudentName: actions.changeStudentName,
	changeStudentEmail: actions.changeStudentEmail,
	changeStudentProfessionalTitle: actions.changeStudentProfessionalTitle,
	changeStudentSummary: actions.changeStudentSummary,
	changeStudentPhone: actions.changeStudentPhone,
	resetStudentInfoInput: actions.resetStudentInfoInput,
	// Work Experience Actions
	changeStudentCompanyName: actions.changeStudentCompanyName,
	changeStudentStartingDate: actions.changeStudentStartingDate,
	changeStudentEndingDate: actions.changeStudentEndingDate,
	changeStudentPlace: actions.changeStudentPlace,
	changeStudentDescription: actions.changeStudentDescription,
	resetStudentWorkExperienceInput: actions.resetStudentWorkExperienceInput,
	// Expertise FrontEnd Actions
	changeStudentFrontEndName: actions.changeStudentFrontEndName,
	changeStudentFrontEndDescription: actions.changeStudentFrontEndDescription,
	changeStudentFrontEndDuration: actions.changeStudentFrontEndDuration,
	resetStudentFrontEndInput: actions.resetStudentFrontEndInput,
	// Expertise BackEnd Actions
	changeStudentBackEndName: actions.changeStudentBackEndName,
	changeStudentBackEndDescription: actions.changeStudentBackEndDescription,
	changeStudentBackEndDuration: actions.changeStudentBackEndDuration,
	resetStudentBackEndInput: actions.resetStudentBackEndInput,
	// Expertise Development Tool Actions
	changeStudentDevelopmentToolName: actions.changeStudentDevelopmentToolName,
	changeStudentDevelopmentToolDescription:
		actions.changeStudentDevelopmentToolDescription,
	changeStudentDevelopmentToolDuration:
		actions.changeStudentDevelopmentToolDuration,
	resetStudentDevelopmentToolInput: actions.resetStudentDevelopmentToolInput,
	// Education Actions
	changeStudentEducationDegreeName: actions.changeStudentEducationDegreeName,
	changeStudentEducationDegreeLevel:
		actions.changeStudentEducationDegreeLevel,
	changeStudentEducationInstituteName:
		actions.changeStudentEducationInstituteName,
	changeStudentEducationPlace: actions.changeStudentEducationPlace,
	changeStudentEducationPassingYear:
		actions.changeStudentEducationPassingYear,
	changeStudentEducationMajorSubject:
		actions.changeStudentEducationMajorSubject,
	resetStudentEducationInput: actions.resetStudentEducationInput,

	submitSingleData: actions.submitSingleData,
	// Action for delete

	deleteSingleData: actions.deleteSingleData
})(Data);

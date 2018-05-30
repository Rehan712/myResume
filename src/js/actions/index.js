import * as types from "../constants";

// Actions for geting data

export function getData(id) {
	return {
		type: types.GET_DATA,
		payload: id
	};
}
export function getDataAttempt() {
	return {
		type: types.GET_DATA_ATTEMPT
	};
}
export function getDataSuccess(data) {
	return {
		type: types.GET_DATA_SUCCESS,
		payload: data
	};
}
export function getDataFail(error) {
	return {
		type: types.GET_DATA_FAIL,
		payload: error
	};
}

// Actions for geting Single data

export function getSingleData(id) {
	return {
		type: types.GET_SINGLE_DATA,
		payload: id
	};
}
export function getSingleDataAttempt() {
	return {
		type: types.GET_SINGLE_DATA_ATTEMPT
	};
}
export function getSingleDataSuccess(data) {
	return {
		type: types.GET_SINGLE_DATA_SUCCESS,
		payload: data
	};
}
export function getSingleDataFail(error) {
	return {
		type: types.GET_SINGLE_DATA_FAIL,
		payload: error
	};
}

// ##########_______________##########

// Actions for the submit Data

export function submitData(data) {
	return {
		type: types.SUBMIT_DATA,
		payload: data
	};
}
export function submitDataAttempt() {
	return {
		type: types.SUBMIT_DATA_ATTEMPT
	};
}
export function submitDataSuccess() {
	return {
		type: types.SUBMIT_DATA_SUCCESS
	};
}
export function submitDataFail(error) {
	return {
		type: types.SUBMIT_DATA_FAIL,
		payload: error
	};
}

// ########____________############

// Actions for the onChange text boxes

export function changeName(value) {
	return {
		type: types.CHANGE_NAME,
		payload: value
	};
}
export function changeEmail(value) {
	return {
		type: types.CHANGE_EMAIL,
		payload: value
	};
}
export function changePassword(value) {
	return {
		type: types.CHANGE_PASSWORD,
		payload: value
	};
}

export function resetStateForm() {
	return {
		type: types.RESET_STATE_FORM
	};
}

// ############_____________#############

// Actions for the Login

export function loginData(data) {
	return {
		type: types.LOGIN_DATA,
		payload: data
	};
}
export function loginDataAttempt() {
	return {
		type: types.LOGIN_DATA_ATTEMPT
	};
}
export function loginDataSuccess(id) {
	return {
		type: types.LOGIN_DATA_SUCCESS,
		payload: id
	};
}
export function loginDataFail(error) {
	return {
		type: types.LOGIN_DATA_FAIL,
		payload: error
	};
}

export function signOutData() {
	return {
		type: types.SIGN_OUT_DATA
	};
}

// ############_________________#############

// Actions for Login textField onChange

export function changeLoginName(value) {
	return {
		type: types.CHANGE_LOGIN_NAME,
		payload: value
	};
}
export function changeLoginPassword(value) {
	return {
		type: types.CHANGE_LOGIN_PASSWORD,
		payload: value
	};
}

export function resetLoginState() {
	return {
		type: types.RESET_LOGIN_STATE
	};
}

// ############_________________#############

// Actions for TextFields of Personal Info of Student

export function changeStudentName(value) {
	return {
		type: types.CHANGE_STUDENT_NAME,
		payload: value
	};
}

export function changeStudentEmail(value) {
	return {
		type: types.CHANGE_STUDENT_EMAIL,
		payload: value
	};
}

export function changeStudentProfessionalTitle(value) {
	return {
		type: types.CHANGE_STUDENT_PROFESSIONAL_TITLE,
		payload: value
	};
}

export function changeStudentPhone(value) {
	return {
		type: types.CHANGE_STUDENT_PHONE,
		payload: value
	};
}

export function changeStudentSummary(value) {
	return {
		type: types.CHANGE_STUDENT_SUMMARY,
		payload: value
	};
}

export function btnCancelPersonalInformation() {
	return {
		type: types.BTN_CANCEL_PERSONAL_INFORMATION
	};
}

// ############_________________#############

// Actions for TextFields of Work Experience of Student

export function changeStudentCompanyName(value) {
	return {
		type: types.CHANGE_STUDENT_COMPANY_NAME,
		payload: value
	};
}

export function changeStudentStartingDate(value) {
	return {
		type: types.CHANGE_STUDENT_STARTING_DATE,
		payload: value
	};
}

export function changeStudentEndingDate(value) {
	return {
		type: types.CHANGE_STUDENT_ENDING_DATE,
		payload: value
	};
}

export function changeStudentPlace(value) {
	return {
		type: types.CHANGE_STUDENT_PLACE,
		payload: value
	};
}

export function changeStudentDescription(value) {
	return {
		type: types.CHANGE_STUDENT_DESCRIPTION,
		payload: value
	};
}

export function btnCancelWorkExperience() {
	return {
		type: types.BTN_CANCEL_WORK_EXPERIENCE
	};
}

export function btnAddWorkExperience() {
	return {
		type: types.BTN_ADD_WORK_EXPERIENCE
	};
}

// ############_________________#############

// Actions for TextFields of Technical Expertise of Student Front End

export function changeStudentFrontEndName(value) {
	return {
		type: types.CHANGE_STUDENT_FRONT_END_NAME,
		payload: value
	};
}

export function changeStudentFrontEndDescription(value) {
	return {
		type: types.CHANGE_STUDENT_FRONT_END_DESCRIPTION,
		payload: value
	};
}

export function changeStudentFrontEndDuration(value) {
	return {
		type: types.CHANGE_STUDENT_FRONT_END_DURATION,
		payload: value
	};
}

export function btnCancelFrontEnd() {
	return {
		type: types.BTN_CANCEL_FRONT_END
	};
}

export function btnAddFrontEnd() {
	return {
		type: types.BTN_ADD_FRONT_END
	};
}

// ############_________________#############

// Actions for TextFields of Technical Expertise of Student Back End

export function changeStudentBackEndName(value) {
	return {
		type: types.CHANGE_STUDENT_BACK_END_NAME,
		payload: value
	};
}

export function changeStudentBackEndDescription(value) {
	return {
		type: types.CHANGE_STUDENT_BACK_END_DESCRIPTION,
		payload: value
	};
}

export function changeStudentBackEndDuration(value) {
	return {
		type: types.CHANGE_STUDENT_BACK_END_DURATION,
		payload: value
	};
}

export function btnCancelBackEnd() {
	return {
		type: types.BTN_CANCEL_BACK_END
	};
}

export function btnAddBackEnd() {
	return {
		type: types.BTN_ADD_BACK_END
	};
}

// ############_________________#############

// Actions for TextFields of Technical Expertise of Student Development Tool

export function changeStudentDevelopmentToolName(value) {
	return {
		type: types.CHANGE_STUDENT_DEVELOPMENT_TOOL_NAME,
		payload: value
	};
}

export function changeStudentDevelopmentToolDescription(value) {
	return {
		type: types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DESCRIPTION,
		payload: value
	};
}

export function changeStudentDevelopmentToolDuration(value) {
	return {
		type: types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DURATION,
		payload: value
	};
}

export function btnCancelDevelopmentTool() {
	return {
		type: types.BTN_CANCEL_DEVELOPMENT_TOOL
	};
}

export function btnAddDevelopmentTool() {
	return {
		type: types.BTN_ADD_DEVELOPMENT_TOOL
	};
}

// ############_________________#############

// Actions for TextFields of Student Education

export function changeStudentEducationDegreeName(value) {
	return {
		type: types.CHANGE_STUDENT_DEGREE_NAME,
		payload: value
	};
}

export function changeStudentEducationDegreeLevel(value) {
	return {
		type: types.CHANGE_STUDENT_DEGREE_LEVEL,
		payload: value
	};
}

export function changeStudentEducationInstituteName(value) {
	return {
		type: types.CHANGE_STUDENT_INSTITUTE_NAME,
		payload: value
	};
}

export function changeStudentEducationMajorSubject(value) {
	return {
		type: types.CHANGE_STUDENT_MAJOR_SUBJECT,
		payload: value
	};
}

export function changeStudentEducationPlace(value) {
	return {
		type: types.CHANGE_STUDENT_EDUCATION_PLACE,
		payload: value
	};
}

export function changeStudentEducationPassingYear(value) {
	return {
		type: types.CHANGE_STUDENT_PASSING_YEAR,
		payload: value
	};
}

export function btnCancelEducation() {
	return {
		type: types.BTN_CANCEL_EDUCATION
	};
}

export function btnAddEducation() {
	return {
		type: types.BTN_ADD_EDUCATION
	};
}

// Actions for the submit Data

export function submitSingleData(data) {
	return {
		type: types.SUBMIT_SINGLE_DATA,
		payload: data
	};
}
export function submitSingleDataAttempt() {
	return {
		type: types.SUBMIT_SINGLE_DATA_ATTEMPT
	};
}
export function submitSingleDataSuccess() {
	return {
		type: types.SUBMIT_SINGLE_DATA_SUCCESS
	};
}
export function submitSingleDataFail(error) {
	return {
		type: types.SUBMIT_SINGLE_DATA_FAIL,
		payload: error
	};
}

// ########____________############

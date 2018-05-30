import * as types from "../constants";

const initial = {
	degreeName: "",
	degreeLevel: "",
	instituteName: "",
	majorSubject: "",
	educationPlace: "",
	passingYear: ""
};

export default function studentDataEducationTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_DEGREE_NAME:
			return { ...state, degreeName: action.payload };
		case types.CHANGE_STUDENT_DEGREE_LEVEL:
			return { ...state, degreeLevel: action.payload };
		case types.CHANGE_STUDENT_INSTITUTE_NAME:
			return { ...state, instituteName: action.payload };
		case types.CHANGE_STUDENT_MAJOR_SUBJECT:
			return { ...state, majorSubject: action.payload };
		case types.CHANGE_STUDENT_EDUCATION_PLACE:
			return { ...state, educationPlace: action.payload };
		case types.CHANGE_STUDENT_PASSING_YEAR:
			return { ...state, passingYear: action.payload };
		default:
			return state;
	}
}

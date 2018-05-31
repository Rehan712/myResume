import * as types from '../constants';

const initial = {
	name: '',
	professionalTitle: '',
	email: '',
	phone: '',
	professionalSummary: ''
};

export default function studentDataInfoTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_NAME:
			return { ...state, name: action.payload };
		case types.CHANGE_STUDENT_PROFESSIONAL_TITLE:
			return { ...state, professionalTitle: action.payload };
		case types.CHANGE_STUDENT_EMAIL:
			return { ...state, email: action.payload };
		case types.CHANGE_STUDENT_PHONE:
			return { ...state, phone: action.payload };
		case types.CHANGE_STUDENT_PROFESSIONAL_SUMMARY:
			return { ...state, professionalSummary: action.payload };
		case types.RESET_STUDENT_INFO_INPUT:
			return initial;
		default:
			return state;
	}
}

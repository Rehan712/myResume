import * as types from '../constants';

const initial = {
	companyName: '',
	startingDate: '',
	endingDate: '',
	workExperiencePlace: '',
	workExperienceDescription: ''
};

export default function studentDataWorkExperienceTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_COMPANY_NAME:
			return { ...state, companyName: action.payload };
		case types.CHANGE_STUDENT_STARTING_DATE:
			return { ...state, startingDate: action.payload };
		case types.CHANGE_STUDENT_ENDING_DATE:
			return { ...state, endingDate: action.payload };
		case types.CHANGE_STUDENT_PLACE:
			return { ...state, workExperiencePlace: action.payload };
		case types.CHANGE_STUDENT_DESCRIPTION:
			return { ...state, workExperienceDescription: action.payload };
		case types.EDIT_WORK_EXPERIENCE:
			const data = action.payload;
			return {
				...state,
				companyName: data.companyName,
				startingDate: data.startingDate,
				endingDate: data.endingDate,
				workExperiencePlace: data.place,
				workExperienceDescription: data.description
			};
		case types.RESET_STUDENT_WORK_EXPERIENCE_INPUT:
			return initial;
		default:
			return state;
	}
}

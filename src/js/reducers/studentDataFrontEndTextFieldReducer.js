import * as types from '../constants';

const initial = {
	frontEndName: '',
	frontEndDescription: '',
	frontEndDuration: ''
};

export default function studentDataFrontEndTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_FRONT_END_NAME:
			return { ...state, frontEndName: action.payload };
		case types.CHANGE_STUDENT_FRONT_END_DESCRIPTION:
			return { ...state, frontEndDescription: action.payload };
		case types.CHANGE_STUDENT_FRONT_END_DURATION:
			return { ...state, frontEndDuration: action.payload };
		case types.EDIT_FRONT_END:
			const data = action.payload;
			return {
				...state,
				frontEndName: data.frontEndName,
				frontEndDescription: data.description,
				frontEndDuration: data.duration
			};
		case types.RESET_STUDENT_FRONT_END_INPUT:
			return initial;
		default:
			return state;
	}
}

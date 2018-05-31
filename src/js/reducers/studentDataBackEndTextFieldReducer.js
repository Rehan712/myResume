import * as types from '../constants';

const initial = {
	backEndName: '',
	backEndDescription: '',
	backEndDuration: ''
};

export default function studentDataBackEndTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_BACK_END_NAME:
			return { ...state, backEndName: action.payload };
		case types.CHANGE_STUDENT_BACK_END_DESCRIPTION:
			return { ...state, backEndDescription: action.payload };
		case types.CHANGE_STUDENT_BACK_END_DURATION:
			return { ...state, backEndDuration: action.payload };
		case types.RESET_STUDENT_BACK_END_INPUT:
			return initial;
		default:
			return state;
	}
}

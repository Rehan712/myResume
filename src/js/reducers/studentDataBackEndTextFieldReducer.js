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
		case types.EDIT_BACK_END:
			const data = action.payload;
			return {
				...state,
				backEndName: data.backEndName,
				backEndDescription: data.description,
				backEndDuration: data.duration
			};
		case types.RESET_STUDENT_BACK_END_INPUT:
			return initial;
		default:
			return state;
	}
}

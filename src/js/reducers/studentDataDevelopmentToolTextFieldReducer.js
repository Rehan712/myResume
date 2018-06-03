import * as types from '../constants';

const initial = {
	developmentToolName: '',
	developmentToolDescription: '',
	developmentToolDuration: ''
};

export default function studentDataDevelopmentToolTextFieldReducer(
	state = initial,
	action
) {
	switch (action.type) {
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_NAME:
			return { ...state, developmentToolName: action.payload };
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DESCRIPTION:
			return { ...state, developmentToolDescription: action.payload };
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DURATION:
			return { ...state, developmentToolDuration: action.payload };
		case types.EDIT_DEVELOPMENT_TOOL:
			const data = action.payload;
			return {
				...state,
				developmentToolName: data.developmentToolName,
				developmentToolDescription: data.description,
				developmentToolDuration: data.duration
			};
		case types.RESET_STUDENT_DEVELOPMENT_TOOL_INPUT:
			return initial;
		default:
			return state;
	}
}

import * as types from "../constants";

const initial = {
	developmentToolName: "",
	developmentToolDescription: "",
	developmentToolDuration: ""
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
		default:
			return state;
	}
}

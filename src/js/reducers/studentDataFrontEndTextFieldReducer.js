import * as types from "../constants";

const initial = {
	frontEndName: "",
	frontEndDescription: "",
	frontEndDuration: ""
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
		default:
			return state;
	}
}

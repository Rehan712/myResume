import * as types from '../constants';

const initial = {
	name: '',
	email: '',
	password: ''
};

export default function formTextFieldReducer(state = initial, action) {
	switch (action.type) {
		case types.CHANGE_NAME:
			return { ...state, name: action.payload };
		case types.CHANGE_EMAIL:
			return { ...state, email: action.payload };
		case types.CHANGE_PASSWORD:
			return { ...state, password: action.payload };
		case types.RESET_STATE_FORM:
			return { name: '', password: '', email: '' };
		default:
			return state;
	}
}

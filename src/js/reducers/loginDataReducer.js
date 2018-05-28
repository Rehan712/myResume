import * as types from '../constants';

const initial = {
	id: ''
};

export default function loginDataReducer(state = initial, action) {
	switch (action.type) {
		case types.LOGIN_DATA_SUCCESS:
			return { ...state, id: action.payload };
		default:
			return state;
	}
}

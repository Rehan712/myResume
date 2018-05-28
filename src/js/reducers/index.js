import { combineReducers } from 'redux';

import formTextFieldReducer from './formTextFieldReducer';
import getDataReducer from './getDataReducer';
import loginTextFieldReducer from './loginTextFieldReducer';
import loginDataReducer from './loginDataReducer';

const rootReducer = combineReducers({
	inputFormData: formTextFieldReducer,
	data: getDataReducer,
	inputLoginData: loginTextFieldReducer
	//dataFromLogin: loginDataReducer
});

export default rootReducer;

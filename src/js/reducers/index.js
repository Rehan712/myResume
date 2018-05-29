import { combineReducers } from "redux";

import formTextFieldReducer from "./formTextFieldReducer";
import getDataReducer from "./getDataReducer";
import loginTextFieldReducer from "./loginTextFieldReducer";
import loginDataReducer from "./loginDataReducer";
import getSingleDataReducer from "./getSingleDataReducer";

const rootReducer = combineReducers({
	inputFormData: formTextFieldReducer,
	data: getDataReducer,
	inputLoginData: loginTextFieldReducer,
	singleData: getSingleDataReducer
	//dataFromLogin: loginDataReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import formTextFieldReducer from "./formTextFieldReducer";
import getDataReducer from "./getDataReducer";
import loginTextFieldReducer from "./loginTextFieldReducer";
import loginDataReducer from "./loginDataReducer";
import getSingleDataReducer from "./getSingleDataReducer";
import studentDataInfoTextFieldReducer from './studentDataInfoTextFieldReducer';
import studentDataBackEndTextFieldReducer from './studentDataBackEndTextFieldReducer';
import studentDataFrontEndTextFieldReducer from './studentDataFrontEndTextFieldReducer';
import studentDataDevelopmentToolTextFieldReducer from './studentDataDevelopmentToolTextFieldReducer';
import studentDataWorkExperienceTextFieldReducer from './studentDataWorkExperienceTextFieldReducer';
import studentDataEducationTextFieldReducer from './studentDataEducationTextFieldReducer';

const rootReducer = combineReducers({
	inputFormData: formTextFieldReducer,
	data: getDataReducer,
	inputLoginData: loginTextFieldReducer,
	singleData: getSingleDataReducer,
	studentInfoInputData:studentDataInfoTextFieldReducer,
	studentFrontEndInputData:studentDataFrontEndTextFieldReducer,
	studentBackEndInputData:studentDataBackEndTextFieldReducer,
	studentDevelopmentToolInputData:studentDataDevelopmentToolTextFieldReducer,
	studentWorkExperienceInputData:studentDataWorkExperienceTextFieldReducer,
	studentEducationInputData:studentDataEducationTextFieldReducer
	//dataFromLogin: loginDataReducer
});

export default rootReducer;

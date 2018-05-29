import * as types from '../constants';

const initial={
	name:'',
	description:'',
	duration:''
}

export default function studentDataDevelopmentToolTextFieldReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_NAME:
			return {...state,name:action.payload};
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DESCRIPTION:
			return {...state,description:action.payload};
		case types.CHANGE_STUDENT_DEVELOPMENT_TOOL_DURATION:
			return {...state,duration:action.payload};
		default:
			return state	
	}
}
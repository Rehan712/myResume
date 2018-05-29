import * as types from '../constants';

const initial={
	name:'',
	description:'',
	duration:''
}

export default function studentDataFrontEndTextFieldReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_STUDENT_FRONT_END_NAME:
			return {...state,name:action.payload};
		case types.CHANGE_STUDENT_FRONT_END_DESCRIPTION:
			return {...state,description:action.payload};
		case types.CHANGE_STUDENT_FRONT_END_DURATION:
			return {...state,duration:action.payload};
		default:
			return state	
	}
}
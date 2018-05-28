import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* getDataSaga(action) {
	const id = action.payload;
	yield put(actions.getDataAttempt());
	try {
		const res = yield call(api.getDataApi, id);
		// we use the call effect of redux-saga for calling api function
		yield put(actions.getDataSuccess(res));
		// here we dispatch the actions
	} catch (e) {
		yield put(actions.getDataFail(e));
	}
}

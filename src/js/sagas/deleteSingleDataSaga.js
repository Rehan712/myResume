import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* deleteSingleDataSaga(action) {
	const data = action.payload;
	yield put(actions.deleteSingleDataAttempt());
	try {
		const res = yield call(api.deleteSingleDataApi, data);
		yield put(actions.deleteSingleDataSuccess());
	} catch (e) {
		yield put(actions.deleteSingleDataFail(e));
	}
}

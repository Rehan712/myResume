import { put, call } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function* submitSingleDataSaga(action) {
	const data = action.payload;
	yield put(actions.submitSingleDataAttempt());
	try {
		const res = yield call(api.submitSingleDataApi, data);
		yield put(actions.submitSingleDataSuccess());
	} catch (e) {
		yield put(actions.submitSingleDataFail(e));
		yield put(actions.resetStateForm());
	}
}

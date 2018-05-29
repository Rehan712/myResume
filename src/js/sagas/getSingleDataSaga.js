import { put, call } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function* getSingleDataSaga(action) {
	const name = action.payload;
	yield put(actions.getSingleDataAttempt());
	try {
		const res = yield call(api.getSingleDataApi, name);
		// we use the call effect of redux-saga for calling api function
		yield put(actions.getSingleDataSuccess(res));
		// here we dispatch the actions
	} catch (e) {
		yield put(actions.getSingleDataFail(e));
	}
}

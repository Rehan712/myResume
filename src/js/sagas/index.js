import { takeLatest, all, fork } from 'redux-saga/effects';

import * as types from '../constants';
import getDataSaga from './getDataSaga';
import submitDataSaga from './submitDataSaga';
import loginDataSaga from './loginDataSaga';
import signOutSaga from './signOutSaga';
import getSingleDataSaga from './getSingleDataSaga';
import submitSingleDataSaga from './submitSingleDataSaga';
import deleteSingleDataSaga from './deleteSingleDataSaga';

function* watchGetData() {
	yield takeLatest(types.GET_DATA, getDataSaga);
}

function* watchGetSingleData() {
	yield takeLatest(types.GET_SINGLE_DATA, getSingleDataSaga);
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA, submitDataSaga);
}

function* watchSubmitSingleData() {
	yield takeLatest(types.SUBMIT_SINGLE_DATA, submitSingleDataSaga);
}

function* watchLoginData() {
	yield takeLatest(types.LOGIN_DATA, loginDataSaga);
}

function* watchsignOutData() {
	yield takeLatest(types.SIGN_OUT_DATA, signOutSaga);
}

function* watchDeleteSingleData() {
	yield takeLatest(types.DELETE_SINGLE_DATA, deleteSingleDataSaga);
}

export default function* rootSaga() {
	yield all([
		fork(watchGetData),
		fork(watchLoginData),
		fork(watchSubmitData),
		fork(watchsignOutData),
		fork(watchGetSingleData),
		fork(watchSubmitSingleData),
		fork(watchDeleteSingleData)
	]);
}

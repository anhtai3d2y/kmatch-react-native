/* eslint-disable @typescript-eslint/no-explicit-any */
import {all, fork} from "redux-saga/effects";
import {signinSaga} from "./sagas";

function* rootSaga(): any {
    yield all([fork(signinSaga)]);
}

export default rootSaga;

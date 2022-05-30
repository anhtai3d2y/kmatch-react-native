/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {all, fork, call, put, takeLatest} from "redux-saga/effects";
import {takeEvery} from "@redux-saga/core/effects";
import {
    LoginActionsTypes,
    getLoginAttempt,
    getLoginError,
    getLoginSuccess,
    ILoginEmailRequested,
    loginEmailSucceeded,
    loginEmailFailed,
} from "../../actions";
import {getLoginData, getLoginEmail} from "../../factories";
import {setToken} from "../../../helpers";

function* getLogin(action: any): Generator<any> {
    yield put(getLoginAttempt(true));
    const {data} = action;

    try {
        const dataLogin: any = yield getLoginData(data);
        if (!dataLogin.error) {
            // yield put(getLoginError(''));
            yield put(getLoginSuccess(dataLogin));
            const token = dataLogin && dataLogin.token;
            token && setToken(token);
        } else {
            yield put(getLoginAttempt(false));
            yield put(getLoginError(data.error || "LOGIN ERROR !!!"));
        }
    } catch {
        yield put(getLoginAttempt(false));
        yield put(getLoginError("LOGIN ERROR !!!"));
    }
}
export function* signinSaga(): any {
    yield takeLatest(LoginActionsTypes.GET_LOGIN, getLogin);
}

function* getLoginEmailSaga({data}: ILoginEmailRequested) {
    try {
        const dataRes: string = yield call(getLoginEmail, data);
        const token = dataRes && dataRes.data.token;
        yield put(getLoginSuccess(dataRes.data));
        token && setToken(token);
        yield put(loginEmailSucceeded(dataRes.data.message));
    } catch (err) {
        yield put(getLoginError(err.message));
    }
}

function* watchLoginEmailRequest() {
    yield takeEvery(LoginActionsTypes.LOGIN_EMAIL_REQUESTED, getLoginEmailSaga);
}

export function* getLoginEmailRequestSaga() {
    yield all([fork(watchLoginEmailRequest)]);
}

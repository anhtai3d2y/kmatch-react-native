import {ILoginEmailFailed, ILoginEmailRequested, ILoginEmailSucceed} from ".";
import {LoginActionsTypes} from "./actionTypes";
import {IGetLoginError, IGetLoginAttempt, IGetLoginSuccess} from "./interfaces";

export const getLogin = (email: string, password: string) => ({
    type: LoginActionsTypes.GET_LOGIN,
    data: {
        email,
        password,
    },
});

export const getLoginSuccess = (data: any): IGetLoginSuccess => ({
    type: LoginActionsTypes.GET_LOGIN_SUCCESS,
    login: data,
});

export const getLoginError = (errorMessage: string): IGetLoginError => ({
    type: LoginActionsTypes.GET_LOGIN_FAIL,
    error: errorMessage,
});

export const getLoginAttempt = (isFetching: boolean): IGetLoginAttempt => ({
    type: LoginActionsTypes.GET_LOGIN_ATTEMPT,
    isFetching,
});

export const resetLogin = () => ({
    type: LoginActionsTypes.RESET_LOGIN,
});

export const loginEmailRequested = (data: any): ILoginEmailRequested => ({
    type: LoginActionsTypes.LOGIN_EMAIL_REQUESTED,
    data,
});

export const loginEmailSucceeded = (login: string): ILoginEmailSucceed => ({
    type: LoginActionsTypes.LOGIN_EMAIL_SUCCEEDED,
    login,
});

export const loginEmailFailed = (error: string): ILoginEmailFailed => ({
    type: LoginActionsTypes.LOGIN_EMAIL_FAILED,
    error,
});

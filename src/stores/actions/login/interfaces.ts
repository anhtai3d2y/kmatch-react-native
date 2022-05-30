import {LoginActionsTypes} from './actionTypes';

export interface IGetLoginSuccess {
  readonly type: LoginActionsTypes.GET_LOGIN_SUCCESS;
  readonly login: any;
}

export interface IGetLoginError {
  readonly type: LoginActionsTypes.GET_LOGIN_FAIL;
  readonly error: string;
}

export interface IGetLoginAttempt {
  readonly type: LoginActionsTypes.GET_LOGIN_ATTEMPT;
  readonly isFetching: boolean;
}

export interface IGetLogin {
  readonly type: LoginActionsTypes.GET_LOGIN;
}

export interface ILoginEmailRequested {
  readonly type: LoginActionsTypes.LOGIN_EMAIL_REQUESTED;
  readonly data: any;
}
export interface ILoginEmailSucceed {
  readonly type: LoginActionsTypes.LOGIN_EMAIL_SUCCEEDED;
  readonly login: any;
}
export interface ILoginEmailFailed {
  readonly type: LoginActionsTypes.LOGIN_EMAIL_FAILED;
  readonly error: string;
}

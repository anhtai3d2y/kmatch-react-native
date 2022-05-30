import {Action} from 'redux';
import {UserLogoutActionsTypes} from './actionTypes';

export interface IUserLogout extends Action {
  readonly type: UserLogoutActionsTypes.USER_LOGOUT;
}

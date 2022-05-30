import {IUserLogout} from './interfaces';
import {UserLogoutActionsTypes} from './actionTypes';

export const logout = (): IUserLogout => ({
    type: UserLogoutActionsTypes.USER_LOGOUT,
  });

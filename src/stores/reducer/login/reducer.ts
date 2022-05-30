import {AnyAction, Reducer} from "redux";
import {ILoginState, initialLoginState} from "./state";
import {LoginActionsTypes, UserLogoutActionsTypes} from "../../actions";

export const LogginReducer: Reducer = (
    state: ILoginState = initialLoginState,
    action: AnyAction,
) => {
    switch (action.type) {
        case LoginActionsTypes.GET_LOGIN_ATTEMPT: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case LoginActionsTypes.GET_LOGIN_SUCCESS: {
            return {
                ...state,
                login: action.login,
            };
        }
        case LoginActionsTypes.GET_LOGIN_FAIL: {
            return {
                ...state,
                error: action.error,
            };
        }
        case UserLogoutActionsTypes.USER_LOGOUT: {
            return initialLoginState;
        }
        case LoginActionsTypes.RESET_LOGIN: {
            return initialLoginState;
        }
        default:
            return state;
    }
};

import {ILoginState} from "./reducer/login";
// import {token} from './reducer/saveToken';

interface StateType {
    retrieved: any;
    loading: boolean;
    error: any;
}
export interface IApplicationState {
    form: any;
    login: ILoginState;
    // token: token;
}

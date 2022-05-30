import {combineReducers} from "redux";
// import {reducer as reduxFormReducer} from "redux-form";
import {LogginReducer} from "./reducer";
import {IApplicationState} from "./IApplicationState";
// import {TokenReducer} from './reducer/saveToken/reducer';

const rootReducer = combineReducers<IApplicationState>({
    login: LogginReducer,
    // token: TokenReducer,
});
export default rootReducer;

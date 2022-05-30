/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }

const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;
const sagaMiddleware = createSagaMiddleware();
const appReducer = (state: any, action: any) => {
    if (action.type === "USER_LOGOUT") {
        return rootReducer(undefined, action);
    }
    return rootReducer(state, action);
};
const store = createStore(
    appReducer,
    compose(applyMiddleware(sagaMiddleware), composeEnhancers),
);
sagaMiddleware.run(rootSaga);

export default store;

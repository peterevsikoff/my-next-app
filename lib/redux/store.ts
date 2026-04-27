import createSagaMiddleware, { Task } from "redux-saga";
import { counterReducer } from "./reducers";
import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./action-creators";
import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";

export interface AppStore extends Store {
  sagaTask?: Task;
}

function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ]);
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const makeStore = (initialState?: Partial<RootState>): AppStore => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: false, // отключаем thunk
        }).concat(sagaMiddleware),
    }) as AppStore;
    
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
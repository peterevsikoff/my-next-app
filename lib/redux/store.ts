import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "./reducers";
import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./action-creators";

export interface AppStore extends Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sagaTask?: any;
}

function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ]);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  // сюда добавляем другие редьюсеры
});

export const makeStore = (initialState?: Partial<RootState>): AppStore => {
  // 1. Создаем saga middleware
  const sagaMiddleware = createSagaMiddleware();
  
  // 2. Создаем store с middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  ) as AppStore;
  
  // 3. Запускаем rootSaga
  store.sagaTask = sagaMiddleware.run(rootSaga);
  
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
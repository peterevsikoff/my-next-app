import { call, delay, put, takeEvery } from "redux-saga/effects";
import { DECREMENT, INCREMENT, INCREMENT_ASYNC, INCREMENT_SUCCESS } from "../action-types";

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const incrementAsync = () => ({
  type: INCREMENT_ASYNC,
});

const incrementSuccess = () => ({
  type: INCREMENT_SUCCESS,
});

const fakeApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('OK'), 1000);
  });
};

// Worker Saga: выполняет асинхронную задачу
function* handleIncrementAsync() {
    try {
        // Вызываем API (имитация)
        yield call(fakeApiCall);
        // или просто задержка
        yield delay(1000);
        
        // Диспатчим действие об успехе
        yield put(incrementSuccess());
        // Диспатчим инкремент
        yield put({ type: 'INCREMENT' });
    } catch (error) {
        console.error('Saga error:', error);
    }
}

// Watcher Saga: следит за действием INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, handleIncrementAsync);
}

export {
    increment,
    decrement,
    incrementAsync,
    incrementSuccess,
    watchIncrementAsync,
}
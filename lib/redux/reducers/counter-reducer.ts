import { DECREMENT, INCREMENT, INCREMENT_ASYNC, INCREMENT_SUCCESS } from "../action-types";

interface CounterState {
    value: number;
    loading: boolean;
}

const initialState: CounterState = {
    value: 0,
    loading: false,
};

const counterReducer = (state = initialState, action: { type: string }): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 };
        case DECREMENT:
            return { ...state, value: state.value - 1 };
        case INCREMENT_ASYNC:
            return { ...state, loading: true };
        case INCREMENT_SUCCESS:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export { counterReducer };
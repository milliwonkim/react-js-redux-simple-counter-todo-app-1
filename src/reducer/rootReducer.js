import { ADD_TYPE } from '../action/actionType';

const initialState = {
    value: 0,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TYPE:
            return {
                ...state,
                value: state.value + action.payload,
            };
        default:
            return state;
    }
};

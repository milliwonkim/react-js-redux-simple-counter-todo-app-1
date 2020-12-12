import { ADD_TYPE } from './actionType';

export const addType = (value) => {
    return {
        type: ADD_TYPE,
        payload: value + 2,
    };
};

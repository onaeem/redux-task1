import { ADD_VALUE } from "../constants/constants";

export const addValue = (text) => {
    const action = {
        type: ADD_VALUE,
        text,
    };
    return action;
};
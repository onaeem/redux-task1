import { ADD_VALUE } from "../constants/constants";

const value = (action) => {
    let {text} = action;
    return{
        text
    }
};

const values = (state = [], action) => {
    let values = null;
    switch (action.type){
        case ADD_VALUE:
            values = [...state, value(action) ];
            console.log(values);
            return values;
        default:
            return state;
    }
};

export default values;
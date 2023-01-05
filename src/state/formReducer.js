import { actionTypes } from "./actionTypes";

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "SSC",
    counter: 0,
    feedback: "",
    term: false,
};

export const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
        case actionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case actionTypes.TOGGLE:
            return {
                ...state,
                term: !state.term,
            };
        // case "INCREMENT":
        //     return {
        //         ...state,
        //         counter: state.counter + 1,
        //     };
        // case "DECREMENT":
        //     return {
        //         ...state,
        //         counter: state.counter - 1,
        //     };
        case actionTypes.COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload.value,
            };
        default:
            return state;
    }
};

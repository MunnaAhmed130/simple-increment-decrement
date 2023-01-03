import React, { useReducer } from "react";
import RippleButton from "../component/rippleButton";
import "./counter.css";

const counter = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type === "DECREMENT") {
            return state - action.payload;
        } else if (action.type === "INCREMENT") {
            return state + action.payload;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="box">
            <div className="container">
                {/* <p className="title">Child</p> */}
                <h2>{state}</h2>
                <div>
                    <div>
                        <RippleButton
                            className="decrement"
                            onClick={() =>
                                dispatch({
                                    type: "DECREMENT",
                                    payload: 1,
                                })
                            }
                        >
                            - 1
                        </RippleButton>
                        <RippleButton
                            className="decrement"
                            onClick={() =>
                                dispatch({ type: "DECREMENT", payload: 5 })
                            }
                        >
                            - 5
                        </RippleButton>
                        <RippleButton
                            className="increment"
                            onClick={() =>
                                dispatch({ type: "INCREMENT", payload: 1 })
                            }
                        >
                            + 1
                        </RippleButton>
                        <RippleButton
                            className="increment"
                            onClick={() =>
                                dispatch({ type: "INCREMENT", payload: 5 })
                            }
                        >
                            + 5
                        </RippleButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default counter;

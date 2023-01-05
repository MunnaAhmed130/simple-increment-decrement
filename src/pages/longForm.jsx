import React, { useReducer, useState } from "react";
import RippleButton from "../component/rippleButton";
import { initialState, reducer } from "../state/formReducer";
import "./form.css";

const longForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state.counter);
    // const [counter, setCounter] = useState(0);
    return (
        <div className="form--container">
            <form
                className="form--long"
                // onSubmit={}
                onSubmit={(e) => {
                    // e.reset();
                    e.preventDefault();
                    console.log(state);
                }}
            >
                <div className="row">
                    <label>
                        First Name <br />
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    },
                                })
                            }
                        />
                    </label>
                    {/* <br /> */}
                    <label className="block">
                        Last Name <br />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    },
                                })
                            }
                        />
                    </label>
                </div>
                {/* <br /> */}
                <div className="row">
                    <label>
                        Email <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    },
                                })
                            }
                        />
                    </label>{" "}
                    {/* <br /> */}
                    <div className="gender">
                        <label>Gender</label>
                        <br />
                        <div className="gender-options">
                            <label className="checkmark__container">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    onClick={(e) =>
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <span className="checkmark"></span>
                                Male
                            </label>
                            <label className="checkmark__container">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    onClick={(e) =>
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <span className="checkmark"></span>
                                Female
                            </label>
                            <label className="checkmark__container">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="others"
                                    id="others"
                                    onClick={(e) =>
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <span className="checkmark"></span>
                                Others
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label>
                        Education <br />
                        <div className="select__container">
                            <select
                                name="education"
                                id="edu-select"
                                onClick={(e) =>
                                    dispatch({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            >
                                <option value="SSC">SSC</option>
                                <option value="HSC">HSC</option>
                                <option value="UnderGrad">
                                    Under Graduate
                                </option>
                                <option value="Graduate">Graduate</option>
                            </select>
                            <span className="focus"></span>
                        </div>
                    </label>
                    {/* <br /> */}
                    <label className="pc_number">
                        Number of PCs
                        <div className="counter">
                            <RippleButton
                                className="decrement"
                                // onClick={(e) => dispatch({ type: "DECREMENT" })}
                                onClick={(e) =>
                                    dispatch({
                                        type: "COUNTER",
                                        payload: { value: -1 },
                                    })
                                }
                            >
                                -
                            </RippleButton>
                            <span className="pc-count">{state.counter}</span>
                            <RippleButton
                                className="increment"
                                // onClick={(e) => dispatch({ type: "INCREMENT" })}
                                onClick={(e) =>
                                    dispatch({
                                        type: "COUNTER",
                                        payload: { value: 1 },
                                    })
                                }
                            >
                                +
                            </RippleButton>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <label className="feedback">
                        Feedback <br />
                        <textarea
                            name="feedback"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    },
                                })
                            }
                        ></textarea>
                    </label>
                </div>
                <div className="row row--last">
                    <label className="checkbox__container">
                        <input
                            type="checkbox"
                            onClick={(e) => dispatch({ type: "TOGGLE" })}
                        />{" "}
                        I agree to terms and conditions
                        <span className="checkbox"></span>
                    </label>{" "}
                    <br />
                    <div className="btn__container">
                        <RippleButton
                            className="submit"
                            type="submit"
                            disabled={!state.term}
                        >
                            Submit
                        </RippleButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default longForm;

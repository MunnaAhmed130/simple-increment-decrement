import React, { useReducer, useState } from "react";
import RippleButton from "../component/rippleButton";
import "./form.css";

const longForm = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type === "DECREMENT") {
            return state - 1;
        } else if (action.type === "INCREMENT") {
            return state + 1;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // const [counter, setCounter] = useState(0);
    return (
        <div className="form--container">
            <form className="form--long">
                <div className="row">
                    <label>
                        First Name <br />
                        <input type="text" name="firstName" id="firstName" />
                    </label>
                    <br />
                    <label for="lastName">
                        Last Name <br />
                        <input type="text" name="lastName" id="lastName" />
                    </label>
                </div>
                {/* <br /> */}
                <div className="row">
                    <label>
                        Email <br />
                        <input type="email" name="email" id="email" />
                    </label>{" "}
                    <br />
                    <div className="gender">
                        <label>Gender</label>
                        <br />
                        <div className="gender-options">
                            <label className="checkmark__container">
                                <input type="radio" name="gender" id="male" />
                                <span className="checkmark"></span>
                                Male
                            </label>
                            <label className="checkmark__container">
                                <input type="radio" name="gender" id="female" />
                                <span className="checkmark"></span>
                                Female
                            </label>
                            <label className="checkmark__container">
                                <input type="radio" name="gender" id="others" />
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
                            <select name="" id="edu-select">
                                <option value="ssc">SSC</option>
                                <option value="hsc">HSC</option>
                            </select>
                            <span class="focus"></span>
                        </div>
                    </label>
                    <br />
                    <label className="pc_number">
                        Number of PCs
                        <div className="counter">
                            <RippleButton
                                className="decrement"
                                onClick={(e) => {
                                    dispatch({ type: "DECREMENT" });
                                    e.preventDefault();
                                }}
                            >
                                -
                            </RippleButton>
                            <span className="pc-count">{state}</span>
                            <RippleButton
                                className="increment"
                                onClick={(e) => {
                                    dispatch({ type: "INCREMENT" });
                                    e.preventDefault();
                                }}
                            >
                                +
                            </RippleButton>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <label className="feedback">
                        Feedback <br />
                        <textarea></textarea>
                    </label>
                </div>
                <div className="row">
                    <RippleButton className="submit">Submit</RippleButton>
                </div>
                {/* <div className="col"> */}
                {/* <label>
                        First Name <br />
                        <input type="text" name="firstName" id="firstName" />
                    </label>
                    <br />
                    <label>
                        Email <br />
                        <input type="email" name="email" id="email" />
                    </label>
                    <br />
                    <label>
                        Education <br />
                        <div className="select__container">
                            <select name="" id="edu-select">
                                <option value="ssc">SSC</option>
                                <option value="hsc">HSC</option>
                            </select>
                            <span class="focus"></span>
                        </div>
                    </label>
                    <label>
                        Feedback <br />
                        <textarea></textarea>
                    </label>
                </div>
                <div className="col">
                    <label for="lastName">
                        Last Name <br />
                        <input type="text" name="lastName" id="lastName" />
                    </label>
                    <br />
                    <label>Gender</label>
                    <br />
                    <div className="gender-options">
                        <label className="checkmark__container">
                            <input type="radio" name="gender" id="male" />
                            <span className="checkmark"></span>
                            Male
                        </label>
                        <label className="checkmark__container">
                            <input type="radio" name="gender" id="female" />
                            <span className="checkmark"></span>
                            Female
                        </label>
                        <label className="checkmark__container">
                            <input type="radio" name="gender" id="others" />
                            <span className="checkmark"></span>
                            Others
                        </label>
                    </div>
                    <label for="">Number of PCs</label> <br />
                    <div className="counter">
                        <RippleButton
                            className="decrement"
                            onClick={(e) => {
                                dispatch({ type: "DECREMENT" });
                                e.preventDefault();
                            }}
                        >
                            -
                        </RippleButton>
                        <span className="pc-count">{state}</span>
                        <RippleButton
                            className="increment"
                            onClick={(e) => {
                                dispatch({ type: "INCREMENT" });
                                e.preventDefault();
                            }}
                        >
                            +
                        </RippleButton>
                    </div>
                </div> */}
            </form>
        </div>
    );
};

export default longForm;

import React from "react";
import RippleButton from "../component/rippleButton";

const longForm = () => {
    return (
        <div className="form--container">
            <form className="form--long">
                <div className="col">
                    <label>
                        First Name <br />
                        <input type="text" name="firstName" id="firstName" />
                    </label>{" "}
                    <br />
                    <label>
                        Email <br />
                        <input type="email" name="email" id="email" />
                    </label>{" "}
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
                    </label>{" "}
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
                    <RippleButton className="decrement"> - </RippleButton>
                    <input type="number" name="" value="" />
                    <RippleButton> + </RippleButton>
                </div>
            </form>
        </div>
    );
};

export default longForm;

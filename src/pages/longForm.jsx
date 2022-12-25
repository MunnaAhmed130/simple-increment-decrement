import React from "react";

const longForm = () => {
    return (
        <div className="form--container">
            <form className="form--long">
                <div className="col">
                    <label for="firstName">
                        First Name <br />
                        <input type="text" name="firstName" id="firstName" />
                    </label>{" "}
                    <br />
                    <label for="email">
                        Email <br />
                        <input type="email" name="email" id="email" />
                    </label>{" "}
                    <br />
                    <label htmlFor="edu">
                        Education <br />
                        <select name="" id="edu">
                            <option value="ssc">SSC</option>
                            <option value="hsc">HSC</option>
                        </select>
                    </label>
                </div>
                <div className="col">
                    <label for="lastName">
                        Last Name <br />
                        <input type="text" name="lastName" id="lastName" />
                    </label>{" "}
                    <br />
                    <label for="">Gender</label>
                    <br />
                    <label for="">
                        <input type="checkbox" name="" id="" />
                        Male
                    </label>
                    <label for="">
                        <input type="checkbox" name="" id="" />
                        Female
                    </label>
                    <label for="">
                        <input type="checkbox" name="" id="" />
                        Others
                    </label>
                </div>
            </form>
        </div>
    );
};

export default longForm;

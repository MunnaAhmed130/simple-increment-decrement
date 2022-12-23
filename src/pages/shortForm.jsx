import React from "react";
import RippleButton from "../component/rippleButton";

const shortForm = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label for="name">Name</label> <br />
                    <input type="text" name="name" id="name" />
                </div>
                <RippleButton>Submit</RippleButton>
            </form>
        </div>
    );
};

export default shortForm;

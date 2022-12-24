import React, { useState } from "react";
import RippleButton from "../component/rippleButton";

const shortForm = () => {
    const [name, setName] = useState("");
    const submit = (e) => {
        e.preventDefault();
        console.log(name);
    };

    return (
        <div>
            <form className="form" onSubmit={submit}>
                <div className="input-container">
                    <label htmlFor="name">Name</label> <br />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onBlur={(e) => setName(e.target.value)}
                    />
                </div>
                <RippleButton type="submit">Submit</RippleButton>
            </form>
        </div>
    );
};

export default shortForm;

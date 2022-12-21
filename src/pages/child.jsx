import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import RippleButton from "./rippleButton";

const child = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);

    return (
        <div className="child">
            <p className="title">Child</p>
            <h2>{count}</h2>
            <div>
                <div>
                    <RippleButton
                        className="decrement"
                        onClick={() => setCount((prevState) => prevState - 1)}
                    >
                        Decrement
                    </RippleButton>
                    <RippleButton
                        className="increment"
                        onClick={() => setCount((prevState) => prevState + 1)}
                    >
                        Increment
                    </RippleButton>
                </div>
            </div>
        </div>
    );
};

export default child;

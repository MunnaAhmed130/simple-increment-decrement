import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./child";

const parent = () => {
    const { count } = useContext(COUNTER_CONTEXT);
    return (
        <div className="parent">
            <div className="box">
                <div className="container">
                    <p className="title">Parent</p>
                    <h2>{count}</h2>
                    {/* <Child setCount={setCount} /> */}
                </div>
            </div>
            <div className="box">
                <div className="container">
                    <Child />
                </div>
            </div>
        </div>
    );
};

export default parent;

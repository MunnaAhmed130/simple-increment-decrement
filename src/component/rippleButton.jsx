import React, { useEffect, useState } from "react";
import "./rippleButton.css";

const rippleButton = ({ children, onClick, className, type, disabled }) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            // className="ripple-button"
            className={`ripple-button ${className}`}
            type={`${type}`}
            onClick={(e) => {
                // e.preventDefault();
                const rect = e.target.getBoundingClientRect();
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
                onClick && onClick(e);
            }}
            disabled={disabled}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            ) : (
                ""
            )}
            <span className="content">{children}</span>
        </button>
    );
};

export default rippleButton;

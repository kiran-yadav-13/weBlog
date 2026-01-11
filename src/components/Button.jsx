import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "btn-gradient",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={ `min-w-[2.3rem] md:px-4 md:py-2 rounded-lg text-[min(2.5vw, 8rem)] text-center p-1 ${bgColor} ${textColor} ${className}` } {...props}>
            {children}
        </button>
    );
}

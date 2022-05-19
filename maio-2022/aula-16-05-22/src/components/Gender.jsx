import React from "react";

const Gender = ({ children }) => {
    return (
        <p>
            <b>Gender:</b> <span>{children}</span>
        </p>
    )
}

export default Gender;
import React from "react";
import './Button.css';

const Button =({ children }) => {
    return(
        <div className="button">
            <button className="button2">{ children }</button>
        </div>
    )
}

export default Button;
import React from "react";
import './Button.css';

const Button =({ children }) => {
    function handleOnClick(){alert('Hola Raul');}
    return(
        <div className="button">
            <button className="button2" onClick={handleOnClick}>{ children }</button>
        </div>
    )
}

export default Button;
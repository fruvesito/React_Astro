import React from "react";
import './Button.css';

const Button =({ children }) => {
    function handleOnClick(){alert('Hola Raul');}
    return(
        <div className="inline-flex w-full p-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full content-center m-auto" onClick={handleOnClick}>{ children }</button>
        </div>
    )
}

export default Button;
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function Button({children}){
return(
    <button class=" flex py-5 px-16 font-Kumbh font-semibold bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
        {children}
    </button>   
);}
export default Button;
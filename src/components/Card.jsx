import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function Card({product}){
    return(
        <button class="relative w-72 h-80 mr-6 bg-black rounded-2xl overflow-hidden transition duration-500 ease-in-out hover:scale-110" onClick={()=> window.location.href = product.url}>
          <img class="w-full h-full object-cover" src={product.img[0]} alt=""/>
        </button>
    );
}
export default Card;
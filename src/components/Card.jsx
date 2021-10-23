import { h, Fragment } from 'preact';

function Card({product}){
    return(
        <button class="relative w-72 h-80 mb-10 md:mr-10  bg-black rounded-2xl overflow-hidden transition duration-500 ease-in-out hover:scale-110" onClick={()=> window.location.href = product.url}>
          <img class="w-full h-full object-cover" src={product.img[0]} alt={product.title}/>
        </button>
    );
}
export default Card;
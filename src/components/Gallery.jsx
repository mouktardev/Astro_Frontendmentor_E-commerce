import { h, Fragment } from 'preact';
import { useState, useEffect,useRef } from 'preact/hooks';
import LightBox from './Lightbox';
import UseMediaQuery from './UseMediaQuery';


function Gallery({images,thumbnails}){

    const [currntImage, setCurrntImage] = useState(images[0])
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    
    let isPageWide = UseMediaQuery('(max-width: 900px)')
    let imageHolder =useRef(null)
    let thumbnailHolder = useRef([])
    thumbnailHolder.current = [];
    const addRef = (el)=>{
        if(el && !thumbnailHolder.current.includes(el)){
            thumbnailHolder.current.push(el)
        }
    }
    
    function nextImage(){
        if(images.length > index+1){
            setCurrntImage(images[index+1]); 
            setIndex(index+1)
        }
    }

    function previousImage(){
        if(images.length > index-1 && index-1 != -1){
            setCurrntImage(images[index-1]); 
            setIndex(index-1)
        }
    }
    function selectedImage( index ){
        setCurrntImage(images[index]);
        setIndex(index);
    }
    
    function ViewrUpdate(){
        const notSelected = thumbnailHolder.current.filter((item, i) => i !== index)
        notSelected.map( thumb => {
            thumb.classList.remove("ring-2","opacity-75","ring-yellow-600")
        })
        thumbnailHolder.current[index].classList.add("ring-2","opacity-75","ring-yellow-600")
        const viewr = imageHolder.firstElementChild
        viewr.src = currntImage
    }

    useEffect(() => {
        if(!isPageWide)
            ViewrUpdate()
    }, [currntImage,isPageWide])

    return(
        <div class="sm:relative flex flex-col md:space-y-10 md:justify-center md:items-center">
            {/* buttons render on mobile */}
              { isPageWide && <div class="absolute w-full px-4 bottom-1/2 flex justify-between" >
                    <button className="rounded-full p-2 bg-white hover:text-yellow-600" 
                    onClick={()=>previousImage()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="rounded-full p-2 bg-white hover:text-yellow-600" 
                    onClick={()=>nextImage()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div> }
                <div class="2xl:w-3/5 xl:w-3/4 sm:w-full overflow-hidden md:rounded-2xl cursor-pointer" ref={el=> imageHolder=el} onClick={()=>{ if(!isPageWide) setOpen(true)}}>
                    <img class="w-full h-full object-cover" src={currntImage} alt=""/>
                </div>
                {/* thumbnails render on desktop */}
                {!isPageWide && <div class="2xl:w-3/5 xl:w-3/4 flex justify-between">
                    {thumbnails.map((thumbnail,i)=>(
                    <button class="w-24 overflow-hidden rounded-2xl bg-white cursor-pointer" ref={addRef} onClick={()=>selectedImage(i)}>
                        <img  class="w-full h-full hover:opacity-40 object-cover" src={thumbnail} alt={`thumbnail-${i}`}/>
                    </button>)
                    )}
                </div>}
                {(open && !isPageWide) && <LightBox setOpen={setOpen} images={images} currntImage={currntImage} setCurrntImage={setCurrntImage} thumbnails={thumbnails} index={index} setIndex={setIndex}/>}
        </div>
    );
}
export default Gallery;
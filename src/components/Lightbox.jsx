import { h, Fragment } from 'preact';
import { useEffect,useRef } from 'preact/hooks';
import UseMediaQuery from './UseMediaQuery';

function LightBox({setOpen,images,thumbnails,index,setIndex,currntImage,setCurrntImage}){

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
        const viewr = imageHolder.lastElementChild
        viewr.src = currntImage
    }

    useEffect(() => {
        if(!isPageWide)
            ViewrUpdate()
    }, [currntImage])



    return(
      <div class="absolute space-y-7 flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0">
           <div class="fixed z-10 bg-black clear-both opacity-50 w-full h-full top-0 bottom-0" onClick={()=>setOpen(false)}></div>
            <div class="relative z-20 w-1/3" ref={el=> imageHolder=el}>
                <button class="absolute right-0 -top-16 text-white hover:text-yellow-600" onClick={()=>setOpen(false)}>
                        <svg className="h-6 w-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd"/></svg>
                </button>  
                <div class="absolute bottom-1/2 -left-7 -right-7 flex justify-between" >
                    <button className="rounded-full p-3 bg-white  hover:text-yellow-600" onClick={()=>previousImage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
                        </svg>
                    </button>
                    <button className="rounded-full p-3 bg-white hover:text-yellow-600" onClick={()=>nextImage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                        </svg>
                    </button>
                </div> 
                <img class="w-full h-full rounded-2xl object-cover" src={currntImage} alt="light box preview" aria-label="light box main image" />
            </div>
            <ul class="w-1/3 z-20 flex justify-between">
                {thumbnails.map((thumbnail,i)=>(
                <li class="w-24 overflow-hidden rounded-2xl cursor-pointer bg-white" ref={addRef} onClick={()=> selectedImage(i)}>
                    <img class="w-full h-full hover:opacity-40 object-cover" src={thumbnail} alt={`thumbnail-${i}`}/>
                </li>)
                )}
            </ul>
        </div>
    );
}
export default LightBox;
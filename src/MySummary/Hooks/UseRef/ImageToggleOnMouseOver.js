import React ,{useRef} from 'react'

function ImageToggleOnMouseOver({ firstImg, secImg }) {
    const imageRef = useRef(null)
    return (
        <div>
            <img onMouseOver={()=>{
                imageRef.current.src= secImg
            }}
                onMouseOut={()=>{
                    imageRef.current.src= firstImg
                }}
                src={firstImg}
                ref={imageRef}/>
        </div>
    )
}

export default ImageToggleOnMouseOver

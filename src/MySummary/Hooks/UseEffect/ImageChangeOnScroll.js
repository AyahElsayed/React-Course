import React, { useState ,useEffect} from 'react'
import ImageToggleOnMouseOver from './ImageToggleOnScroll'

function ImageChangeOnScroll() {
    const [currentID, setCurrentID] = useState(0)
    const ID = [10, 20, 30, 40,50,60]
    useEffect(() => {
        window.document.title = `ID: ${currentID}` 
        
    },[currentID])
    return (
        <div>
            {
                ID.map((singleId) => {
                    return <div key={singleId}
                        onMouseOver={() => {
                            setCurrentID(singleId)
                            console.log(`onMouseOver:${singleId}`)
                        }}>
                        <ImageToggleOnMouseOver firstImg="./assets/work2.webp"
                            secImg="./assets/work4.webp"
                            alt="" />
            &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver firstImg="./assets/work5.webp"
                            secImg="./assets/work6.webp"
                            alt="" />
                        {/* <ImageToggleOnMouseOver firstImg="./assets/work2.webp"
                            secImg="./assets/work4.webp"
                            alt="" />
            &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver firstImg="./assets/work5.webp"
                            secImg="./assets/work6.webp"
                            alt="" /> */}
                    </div>
                })
            }
        </div>
    )
}

export default ImageChangeOnScroll





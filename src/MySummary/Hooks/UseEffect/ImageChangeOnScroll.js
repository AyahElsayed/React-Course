import React from 'react'
import ImageToggleOnMouseOver from './ImageToggleOnScroll'

function ImageChangeOnScroll() {
    return (
        <div>
            <ImageToggleOnMouseOver firstImg="./assets/work2.webp"
                secImg="./assets/work4.webp"
                alt="" />
            &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver firstImg="./assets/work5.webp"
                secImg="./assets/work6.webp"
                alt="" />
            <ImageToggleOnMouseOver firstImg="./assets/work2.webp"
                secImg="./assets/work4.webp"
                alt="" />
            &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver firstImg="./assets/work5.webp"
                secImg="./assets/work6.webp"
                alt="" />
        </div>
    )
}

export default ImageChangeOnScroll





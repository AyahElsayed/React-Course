import React, { useRef, useState, useEffect } from 'react'

function ImageToggleOnScroll({ firstImg, secImg }) {

    const imageRef = useRef(null)
    const [inview, setInview] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect()
        return rect.top >= 0 && rect.bottom <= window.innerHeight
    }

    useEffect(() => {
        setIsLoading(false)
        setInview(isInView())
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = () => {
        setInview(isInView())
    }
    return (
        <div>
            <img 
                src={ isLoading ? 'loading'
                    : inview ? secImg : firstImg}
                ref={imageRef} 
                width="300" 
                height="300"
                />
        </div>
    )
}

export default ImageToggleOnScroll

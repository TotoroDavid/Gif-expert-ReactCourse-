import { useEffect, useState } from "react"
import { getGif } from "../helper/getGif"

export const useFetchGif = (category) => {
    /**
     * category comes from props App.jsx
     */

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGif(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        {
            images,
            // images: images,
            isLoading
            // isLoading: isLoading

        }
    )
}

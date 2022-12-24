// import { useState, useEffect } from 'react'
// import { getGif } from '..//helper/getGif'
import { GifItem } from './GifItem'
import { useFetchGif } from '..///hooks/useFetchGif'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif(category)
    //console.log(isLoading)

    // const [images, setImages] = useState([])
    // // console.log(images)
    // const [isLoading, setIsLoading] = useState(true)

    // const getImages = async () => {
    //     const newImages = await getGif(category)
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages()
    // }, [])

    return (
        <>
            <h4>{category}</h4>
            {/* {
                isLoading
                    ? (<h2>Loading . . .</h2>)
                    : null
            } */}
            {
                isLoading && (<h2>Loading . . .</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

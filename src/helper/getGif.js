export const getGif = async (category) => {

    const YOUR_API_KEY = `api_key=iqI1VXl24ihkHLvxA4kGnNY6dijIjjM1&`
    const http = `https://api.giphy.com/v1/gifs/search`
    const url = `${http}?${YOUR_API_KEY}q=${category}&limit=5`
    const request = await fetch(url)
    const { data } = await request.json()
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }))
    return gifs
    // console.log(gifs)

}

export const getGIFsFromAPI = async (category) => {
    const api_key = "r24i6QbSprRKYcajlsMwbFFcVqLFOmSA";
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs
}
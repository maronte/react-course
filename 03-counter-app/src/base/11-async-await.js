export const getImagen = async() => {
    const apiKey = 'r24i6QbSprRKYcajlsMwbFFcVqLFOmSA';
    const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json(); 
    const { url } = data.images.original;
    return url;
};
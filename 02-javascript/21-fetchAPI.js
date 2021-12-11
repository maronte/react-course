const apiKey = 'r24i6QbSprRKYcajlsMwbFFcVqLFOmSA';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

const response = await request;

const { data } = await response.json();

const imageUrl = data.images.original.url;

const imageNode = document.createElement('img');

imageNode.src = imageUrl;

document.body.appendChild(imageNode);
export const getGif = async ( category) => {
  const URL =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=LLcsfFYpM7fRcDNI89DMWGetu8BjhfeZ`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
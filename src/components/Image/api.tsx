const URL: string = "https://api.imgflip.com/get_memes";

export const getImageURL = async () => {
  const response = await fetch(`${URL}`);
  const images = await response.json();
  const memes = images.data.memes;
  const index = Math.floor(Math.random() * memes.length);
  return memes[index].url || " ";
};

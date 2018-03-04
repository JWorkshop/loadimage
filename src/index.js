const load = url => {
  return new Promise(resolve => {
    let image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);

    image.src = url;
  });
};

const loadImage = async imageURLs => {
  if (typeof imageURLs === "string") {
    return await load(imageURLs);
  } else if (Array.isArray(imageURLs)) {
    let images = [];

    for (let i = 0; i < imageURLs.length; i++) {
      images[i] = await load(imageURLs[i]);
    }

    return images;
  }
};

export default loadImage;

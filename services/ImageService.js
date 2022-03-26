const isImage = require("is-image");

module.exports = class ImageService {
  constructor() {}

  getSizes () {
    const sizes = process.env.SIZE.split("x");
    const width = +sizes[0];
    const height = +sizes[1];

    return { width, height };
  };

  isImageCheck (file) {
    return isImage(file);
  }
}
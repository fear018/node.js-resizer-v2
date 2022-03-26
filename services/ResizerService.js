const path = require('path');
const sharp = require("sharp");

const ImageService = require('./ImageService.js');
const DirectoryService = require('./DirectoryService.js');

module.exports = class ResizerService {
  constructor() {
    this.imageService = new ImageService();
    this.directoryService = new DirectoryService();
  }

  resizeFiles ({ width, height }) {
    const filesFromInputDir = this.directoryService.getFilesFromInputDir();

    filesFromInputDir
      .filter((file) => this.imageService.isImageCheck(`${path.resolve(process.env.INPUT)}/${file}`))
      .forEach((picture) => {
        sharp(`${path.resolve(process.env.INPUT)}/${picture}`)
          .resize({ width, height })
          .toFile(`${path.resolve(process.env.OUTPUT)}/${picture}`, (error) => {
            if (error) {
              console.log(`sharp-error-${error}`);
            }
          });
      });
  }
  
  run () {
    this.directoryService.clearOutputDir();

    const sizes = this.imageService.getSizes();

    this.resizeFiles(sizes);
  };
}
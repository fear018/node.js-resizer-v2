const fs = require("fs");
const path = require('path');

module.exports = class DirectoryService {
  constructor() {
    this.filesFromOutputDir = null;
  }
  
  getFilesFromInputDir () {
    const filesFromInputDir = fs.readdirSync(path.resolve(process.env.INPUT));

    return filesFromInputDir;
  };

  getFilesFromOutputDir () {
    this.filesFromOutputDir = fs.readdirSync(path.resolve(process.env.OUTPUT));

    return this.filesFromOutputDir;
  };

  clearOutputDir () {
    this.filesFromOutputDir = this.getFilesFromOutputDir();

    if (this.filesFromOutputDir && this.filesFromOutputDir.length) {
      this.filesFromOutputDir.forEach((file) => fs.unlinkSync(`${path.resolve(process.env.OUTPUT)}/${file}`));
    }
  };
}
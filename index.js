require("dotenv").config();

const ResizerService = require('./services/ResizerService.js');

const resizerService = new ResizerService();

resizerService.run();

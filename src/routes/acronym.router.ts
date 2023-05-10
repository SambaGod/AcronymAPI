import express = require('express');
import { importJsonToDBController } from '../controllers/acronym.controller';

const AcronymAPI = express.Router();

AcronymAPI.route('/import-json').post(importJsonToDBController);

export default AcronymAPI;

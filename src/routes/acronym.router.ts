import express = require('express');
import {
  deleteAcronymController,
  importJsonToDBController,
  postAcronymController,
  putAcronymController,
  searchAcronym,
  searchAcronyms,
} from '../controllers/acronym.controller';

const AcronymAPI = express.Router();

AcronymAPI.route('/import-json').post(importJsonToDBController);
AcronymAPI.route('/:acronym').get(searchAcronym);
AcronymAPI.route('/:acronym').put(putAcronymController);
AcronymAPI.route('/:acronym').delete(deleteAcronymController);
AcronymAPI.route('').get(searchAcronyms);
AcronymAPI.route('').post(postAcronymController);

export default AcronymAPI;

import express = require('express');
import { searchRandomAcronyms } from '../controllers/acronym.controller';

const RandomAPI = express.Router();

RandomAPI.route('/:count').get(searchRandomAcronyms);

export default RandomAPI;

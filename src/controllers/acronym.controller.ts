import { Request, Response } from 'express';
import { importJsonToDBService } from '../services/acronym.service';

export async function importJsonToDBController(
  request: Request,
  response: Response
) {
  try {
    const file = require('../gistfile1.json');
    await file.forEach((element: any) => {
      importJsonToDBService(element);
    });
    response.status(200).send({
      message: 'Data imported successfully',
    });
  } catch (error) {
    response.status(400).send({
      message: 'Unable to import json data into DB',
      error: error,
    });
  }
}

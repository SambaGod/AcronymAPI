import { Request, Response } from 'express';
import {
  deleteAcronymService,
  getAcronymService,
  getAcronymsService,
  getRandomAcronymsService,
  importJsonToDBService,
  postAcronymService,
  putAcronymService,
} from '../services/acronym.service';

export async function importJsonToDBController(response: Response) {
  try {
    const file = require('../gistfile1.json');
    await file.forEach((element: any) => {
      importJsonToDBService(element);
    });
    response.status(200).send({
      message: 'Data imported successfully',
    });
  } catch (error) {
    response.status(500).send({
      message: 'Unable to import json data into DB',
      error: error,
    });
  }
}

export async function searchAcronym(request: Request, response: Response) {
  try {
    const acronym = request.params.acronym;
    const res = await getAcronymService(acronym);
    if (res) {
      response.status(200).send(res);
    } else {
      response.status(400).send({
        message:
          'No such acronym exists in our database. Make sure a correct string name was entered',
      });
    }
  } catch (error) {
    response.status(500).send({
      message: 'Something went wrong on the server',
      error: error,
    });
  }
}

export async function searchRandomAcronyms(
  request: Request,
  response: Response
) {
  try {
    const count: any = request.params.count;
    const res = await getRandomAcronymsService(count);
    response.status(200).send(res);
  } catch (error) {
    response.status(500).send({
      message: 'Something went wrong on the server',
      error: error,
    });
  }
}

export async function searchAcronyms(request: Request, response: Response) {
  try {
    const params = request.query;
    const res = await getAcronymsService(params);
    if (res.length !== 0) {
      response.status(200).send(res);
    } else {
      response.status(400).send({
        message:
          'No items found for this query. If you think it is a mistake, search again without setting the from query parameter',
      });
    }
  } catch (error) {
    response.status(500).send({
      message: 'Unable to perform search',
      error: error,
    });
  }
}

export async function postAcronymController(
  request: Request,
  response: Response
) {
  try {
    const params: any = request.body;
    const res = await postAcronymService(params);
    response.status(200).send({
      message: 'New Acronym Added',
      acronym: res,
    });
  } catch (error) {
    response.status(500).send({
      message: 'Unable to post acronym',
      error: error,
    });
  }
}

export async function putAcronymController(
  request: Request,
  response: Response
) {
  try {
    const acronym: string = request.params.acronym;
    const params: any = request.body;
    await putAcronymService(params, acronym);
    response.status(200).send({
      message: 'Acronym Successfully Updated',
    });
  } catch (error) {
    response.status(500).send({
      message:
        'Unable to update acronym. Make sure a correct string acronym is added in the url param',
      error: error,
    });
  }
}

export async function deleteAcronymController(
  request: Request,
  response: Response
) {
  try {
    const acronym: string = request.params.acronym;
    await deleteAcronymService(acronym);
    response.status(200).send({
      message: 'Acronym Successfully Delete',
    });
  } catch (error) {
    response.status(500).send({
      message:
        'Unable to delete acronym. Make sure a correct string acronym is added in the url param',
      error: error,
    });
  }
}

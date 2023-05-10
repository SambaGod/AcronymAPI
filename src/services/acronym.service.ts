import { Acronym } from '../entity/Acronym';
import { importJsonToDB } from '../models/acronym.model';

export async function importJsonToDBService(item: JSON): Promise<Acronym> {
  try {
    const key: any = Object.keys(item);
    const params: any = {};
    params.acronym = key;
    params.description = item[key];
    const insertResponse: Acronym = await importJsonToDB(params);
    return insertResponse;
  } catch (error) {
    console.error(error);
  }
}

import { AppDataSource } from '../data-source';
import { Acronym } from '../entity/Acronym';

export async function importJsonToDB(params: any) {
  const acronym = new Acronym();
  acronym.acronym = params?.acronym;
  acronym.description = params?.description;
  const data = await AppDataSource.manager.save(acronym);
  return data;
}

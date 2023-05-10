import { Acronym } from '../entity/Acronym';
import {
  deleteEntry,
  getAcronym,
  getAcronyms,
  getRandomAcronyms,
  importJsonToDB,
  insert,
  update,
} from '../models/acronym.model';

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

export async function getAcronymService(acronym: string) {
  try {
    const res: Acronym = await getAcronym(acronym);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getAcronymsService(params: any) {
  try {
    const res: Array<Acronym> = await getAcronyms(params);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getRandomAcronymsService(count: number) {
  try {
    const res: Array<Acronym> = await getRandomAcronyms(count);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function postAcronymService(params: {
  acronym: string;
  description: string;
}) {
  try {
    const res: Acronym = await insert(params);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function putAcronymService(
  params: {
    acronym: string;
    description: string;
  },
  acronym: string
) {
  try {
    const res: Acronym = await update(params, acronym);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAcronymService(acronym: string) {
  try {
    const res: Acronym = await deleteEntry(acronym);
    return res;
  } catch (error) {
    console.error(error);
  }
}

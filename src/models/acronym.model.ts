import { Like } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Acronym } from '../entity/Acronym';

export async function importJsonToDB(params: any): Promise<any> {
  const acronym = new Acronym();
  acronym.acronym = params?.acronym[0];
  acronym.description = params?.description;
  const data = await AppDataSource.manager.save(acronym);
  return data;
}

export async function getAcronym(acronym: string): Promise<any> {
  const data = await AppDataSource.manager.findOne(Acronym, {
    where: [{ acronym: acronym }],
  });
  return data;
}

export async function getAcronyms(params: {
  from: number;
  limit: number;
  search: string;
}): Promise<any> {
  const data = await AppDataSource.manager.find(Acronym, {
    order: {
      id: 'DESC',
    },
    where: [
      {
        acronym: Like(`%${params?.search}%`),
      },
      {
        description: Like(`%${params?.search}%`),
      },
    ],
    take: params?.limit || 10,
    skip: (params?.from - 1) * params?.limit || 0,
  });
  return data;
}

export async function getRandomAcronyms(count: number): Promise<any> {
  const data = await AppDataSource.manager
    .getRepository(Acronym)
    .createQueryBuilder('acronym')
    .select()
    .orderBy('RANDOM()')
    .take(count)
    .getMany();
  return data;
}

export async function insert(params: { acronym: string; description: string }) {
  const acronym = new Acronym();
  acronym.acronym = params?.acronym;
  acronym.description = params?.description;
  const data = await AppDataSource.manager.save(acronym);
  return data;
}

export async function update(
  params: {
    acronym: string;
    description: string;
  },
  acronym: string
): Promise<any> {
  const data = await AppDataSource.manager
    .createQueryBuilder()
    .update(Acronym)
    .set(params)
    .where('acronym = :acronym', { acronym: acronym })
    .execute();
  return data;
}

export async function deleteEntry(acronym: string): Promise<any> {
  const data = await AppDataSource.manager
    .createQueryBuilder()
    .delete()
    .from(Acronym)
    .where('acronym = :acronym', { acronym: acronym })
    .execute();
  return data;
}

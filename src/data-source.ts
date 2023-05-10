import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Acronym } from './entity/Acronym';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [User, Acronym],
  migrations: [],
  subscribers: [],
});

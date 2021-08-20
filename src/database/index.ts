import { createConnection, Connection } from 'typeorm';

import dbConfig from '../config/db';

export default async (
  connName: 'default' | 'test' = 'default'
): Promise<Connection> => {
  return createConnection({ ...dbConfig, logging: true, name: connName });
};

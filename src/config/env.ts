import 'dotenv/config';

declare let process: {
  env: {
    NODE_ENV: 'production' | 'dev' | 'test';
    PORT: number;
    DB_TYPE: 'mysql' | 'postgres' | 'oracle' | 'mongodb';
    DB_URL?: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_LOGS: boolean;
  };
};

export const {
  NODE_ENV = 'dev',
  PORT = 3000,
  DB_TYPE = 'postgres',
  DB_URL,
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USERNAME = 'root',
  DB_PASSWORD = 'root',
  DB_NAME = 'e_learning_api',
  DB_LOGS = true,
} = process.env;

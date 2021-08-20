import 'reflect-metadata';

import cors from 'cors';
import express, { Application } from 'express';
import 'express-async-errors';

import createConnection from './database';

class App {
  express: Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    // this.routes();
  }

  private middlewares = (): void => {
    this.express.disable('x-powered-by');
    this.express.use(express.json());
    this.express.use(cors({ origin: '*' }));
  };

  private database = async (): Promise<void> => {
    await createConnection();
  };

  // private routes = (): void => {
  //   this.express.use(routes);
  // };
}

export default App;

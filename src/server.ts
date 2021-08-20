/* eslint-disable no-console */
import http from 'http';

import App from './app';
import { NODE_ENV, PORT } from './config/env';

const server = http.createServer(new App().express);

server.listen(PORT, async () => {
  if (NODE_ENV === "dev") {
    console.log(`Started development server on port ${PORT} 🚀`);
  }
});

export default server;
